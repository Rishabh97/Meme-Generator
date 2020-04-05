import React from 'react'

class MemeGenerator extends React.Component {

    constructor() {

        super()
        this.state={
            topText:"",
            bottomText: "",
            randomImage: "http://i.imgflip.com/1bij.jpg",
            allMemeImgs:[],
            topText:"",
            bottomText: "" 
        }
        this.onChange = this.onChange.bind(this)
        this.onClick = this.onClick.bind(this)
    }

    onChange(event) {
        const {name, value} = event.target

         this.setState({ [name]: value })
    }

    onClick(event) {
        this.setState({
            randomImage: this.state.allMemeImgs[Math.floor(Math.random() * this.state.allMemeImgs.length)].url
        })
    }

    componentDidMount() {
        fetch("https://api.imgflip.com/get_memes").
        then(response => response.json()).
        then(response => {
            const {memes} = response.data
            console.log(memes[0])
            this.setState({ allMemeImgs: memes })
        })


    }

    render(){

        return(
            <div>
            <div className="meme-form-top">
                <form className="meme-form">

                <input className="input-box" type="text" placeholder="Top Text" name="topText" value={this.state.topText} onChange={this.onChange} />
                <input className="input-box" type="text" placeholder="Bottom Text" name="bottomText" value={this.state.bottomText} onChange={this.onChange} />

                </form>
                
                <button onClick = {this.onClick}>Generate</button>
            </div>

            <div className="meme">
                    <img 
                         src={this.state.randomImage}
                        alt=""
                    />
                    <h1 className="top">{this.state.topText}</h1>
    
                    <h1 className="bottom">{this.state.bottomText}</h1>
            </div>

        </div>

        )
    }


}

export default MemeGenerator


// fetch ata from an api
// store it in the state
// class based components , functional based components and props
// and use of lifecycle methods like componentDidMount
// created a meme generator which gets data from api and lets the user makes memes on the images fetched