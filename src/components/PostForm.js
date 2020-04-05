import React from 'react'
import {connect} from 'react-redux'
import {createPost} from "../redux/actions";
import {postsReducer} from "../redux/postsReducer";

class PostForm extends React.Component {
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

    this.props.createPost(newPost); // в закулисах эта функция будет вызывать dispatch(), тем самым изменять наш state
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

//Функция в которой мы мапим функцию dispatch на пропсы и в итоге в компоненте у нас будет функция
//которая называется this.state.createPost() и в нее мы можем кинуть наш новый пост newPost
const mapDispatchToProps = {
  // the same with createPost:createPost
  createPost
};

export default connect(null, mapDispatchToProps)(PostForm)