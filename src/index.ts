import Parents from './lib/script'

class Index extends Parents {
  constructor(m: string) {
    super(m)
    console.log('constructor', m)
  }
}

const w = new Index('12')
w.say()
