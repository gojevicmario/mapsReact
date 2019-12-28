import namor from 'namor'

const range = len => {
  const arr = []
  for (let i = 0; i < len; i++) {
    arr.push(i)
  }
  return arr
}

const newPerson = () => {
  return {
    companyName: namor.generate({ words: 1, numbers: 0 }),
    founder: namor.generate({ words: 1, numbers: 0 }),
    city: namor.generate({ words: 1, numbers: 0 }),
    country: namor.generate({ words: 1, numbers: 0 }),
    street: namor.generate({ words: 3, numbers: 0 }),
    photo: namor.generate({ words: 1, numbers: 0 }),
    website: namor.generate({ words: 1, numbers: 0 }),
    lat: (Math.random() * (180 - -180) + -180).toFixed(3) * 1,
    lng: (Math.random() * (180 - -180) + -180).toFixed(3) * 1
  }
}

export default function makeData(...lens) {
  const makeDataLevel = (depth = 0) => {
    const len = lens[depth]
    return range(len).map(d => {
      return {
        ...newPerson(),
        subRows: lens[depth + 1] ? makeDataLevel(depth + 1) : undefined,
      }
    })
  }

  return makeDataLevel()
}
