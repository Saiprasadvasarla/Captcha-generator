import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'

import ContactItem from './contactitem'

import '../App.css'

const initialContactsList = [
  {
    id: uuidv4(),
    name: 'Ram',
    mobileNo: 9999988888,
    isFavorite: false,
  },
  {
    id: uuidv4(),
    name: 'Pavan',
    mobileNo: 8888866666,
    isFavorite: true,
  },
  {
    id: uuidv4(),
    name: 'Nikhil',
    mobileNo: 9999955555,
    isFavorite: false,
  },
]

class Arraymethods extends Component {
    constructor(props){
        super(props)
        console.log("constructor")
    }
  state = {
    contactsList: initialContactsList,
    name: '',
    mobileNo: '',
  };

  componentDidMount(){
    console.log("componentDidMount")
  }

  componentDidUpdate(_){

  }
  componentWillUnmount(){

  }

  toggleIsFavorite = id => {
    
    this.setState({
      contactsList:this.state.contactsList.map(eachContact => {
        if (id === eachContact.id) {
          return {...eachContact, isFavorite: !eachContact.isFavorite}
        }
        return eachContact
      }),
    })
  }
//   [...hh,kji]
//   {...HashChangeEvent,hvhvh}

  onAddContact = event => {
    event.preventDefault()
    const {name, mobileNo,contactsList} = this.state
    
//new object for aarray
    const newContact = {
        id: uuidv4(),
        name:name,
        mobileNo:mobileNo,
        isFavorite: false,
      }
// setting state for array
      this.setState({
        contactsList:[...contactsList,newContact],
        name:"",
        mobileNo:""
    })

    // this.setState(prevState => ({
    //   contactsList: [...prevState.contactsList, newContact],
    //   name: '',
    //   mobileNo: '',
    // }))

//    //copy new array to push new value
//     const newArray=[...contactsList];
//     newArray.push(newContact);
// // setting new array to state array
//     this.setState({
//         contactsList:newArray,
//         name:"",
//         mobileNo:""
//     })

    //beginers mistakes
    // contactsList.push(newContact)
    // this.setState({
    //     name:"",
    //     mobileNo:""
    // })

      
  }

  onChangeMobileNo = event => {
    this.setState({mobileNo: event.target.value})
  }

  onChangeName = event => {
    this.setState({name: event.target.value})
  }

  render() {
    console.log("render")
    const {name, mobileNo, contactsList} = this.state
    return (
      <div className="app-container">
                {console.log("return")}

        <div className="responsive-container">
          <h1 className="heading">Contacts</h1>
          <form className="contact-form-container" onSubmit={this.onAddContact}>
            <input
              value={name}
              onChange={this.onChangeName}
              className="input"
              placeholder="Name"
            />
            <input
              className="input"
              value={mobileNo}
              onChange={this.onChangeMobileNo}
              placeholder="Mobile Number"
            />
            <button type="submit" className="button">
              Add Contact
            </button>
          </form>
          <ul className="contacts-table">
            <li className="table-header">
              <p className="table-header-cell name-column">Name</p>
              <hr className="separator" />
              <p className="table-header-cell">Mobile Number</p>
            </li>
            {contactsList.map(eachContact => (
              <ContactItem
                key={eachContact.id}
                contactDetails={eachContact}
                toggleIsFavorite={this.toggleIsFavorite}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default Arraymethods