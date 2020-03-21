import React from 'react'
export default class PostForm extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      title: ''
    }
  }

  submitHandler = event => {
    event.preventDefault() // для того, чтобы наша страница не перезагружалась
    
    const {title} = this.state

    const newPost = { 
      // можно записать короче (аля title, id:Date.now().toString())
      title: title,
      id: Date.now().toString()
    }

    console.log(newPost)
    this.setState({ title: '' }) // очистка input'a
  }
  changeInputHandler = event => { // универсальная функция для обработки множества inputs
    event.persist()
    this.setState(prev => ({...prev, ...{
      [event.target.name]: event.target.value
    }}))
  }
  render() {
    return (
      <form onSubmit={this.submitHandler}>
        <div className="form-group">
          <label htmlFor="title">Заголовок поста</label>
          <input 
            type="text"
            className="form-control"
            id="title"
            value={this.state.title}
            name="title"
            onChange={this.changeInputHandler}
          />
        </div>
        <button className="btn btn-success" type="submit">Создать</button>
      </form>
    )
  }
}