import json from './parser';
import read from './reader';
import GameSaving from './GameSaving';

export default class GameSavingLoader {
  static load() {
    //const data = read(); // возвращается Promise!
    //const value = json(data); // возвращается Promise!

    return read()
      .then(buf => json(buf))
      .then(res => {
        const gs = JSON.parse(res);
        return new GameSaving(gs.id, gs.created, gs.userInfo);
      })
      .catch(e => {
        throw new Error(`Ошибка ${e}`);
      });
  }
}