import * as React from 'react'

export const RandomImage: React.StatelessComponent<IProps> = (props) => {
    let {height=100, width=100} = props
    return (
        <img src={`https://unsplash.it/${height}/${width}`} />
    )
}

export default RandomImage

interface IProps {
    height?: number,
    width?: number,
}
