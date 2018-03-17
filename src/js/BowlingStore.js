import { autorun, observable } from "mobx"

class BowlingStore{
    @observable frames  = 10
    @observable score   = 0
    @observable players = 1
}

var store =  new BowlingStore

export default  store

