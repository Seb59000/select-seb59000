# select-seb59000

> a simple select

[![NPM](https://img.shields.io/npm/v/select-seb59000.svg)](https://www.npmjs.com/package/select-seb59000) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save select-seb59000
```

## Usage

```jsx
import React, { Component } from 'react'

import { Dropdown } from 'select-seb59000'

class Example extends Component {
  const values = [0, 1, 2, 3, 4]
  const onChange = ()=>{
    //To Do();
  }

  render() {
    return <Dropdown id="id" classOfSelect="classOfSelect" values={values} choices={values} onChange={onChange} />
  }
}
```

## Props

id - the id of your DropDown

classOfSelect - the class for the selects

choices - the text displayed in the selection

values - the values which are saved

onChange - a function to run onChange()

## License

MIT © [Seb59000](https://github.com/Seb59000)

