# use-toggle [![License](https://img.shields.io/npm/l/use-toggle.svg)](https://github.com/flaque/use-toggle/blob/master/package.json)

## Install

```
yarn add @flaque/use-toggle
```

## Usage

```ts
import useToggle from '@flaque/use-toggle'

function MySwitch() {
    const [isOn, toggleIsOn] = useToggle(true)

    return (<>
        <p>{`I am ${isOn ? "on" : "off"}`}</p>

        <button onClick={toggleIsOn}>
    </>)
}
```
