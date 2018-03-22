import { autorun, observable } from "mobx"

class MessagingApp{
    @observable message  = ''
    @observable url  = 'https://chatty.kubernetes.doodle-test.com/api/chatty/v1.0/?token=9zHgPu72Frz4'
    @observable messages  = []
    @observable messagesDivs  = ''
}

var store =  new MessagingApp

export default  store

