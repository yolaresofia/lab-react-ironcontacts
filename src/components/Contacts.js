import React, { Component } from 'react';
import contactsDb from './../contacts.json'
import Card from './Card'

let splicedContacts = contactsDb.splice(0,5)

export default class Contacts extends Component {
state = {
    contacts: splicedContacts
}

deleteTheContact = (id) => {
    const updatedContacts = this.state.contacts.filter((contact) => {
        return (contact.id !== id)
    })
    this.setState({ contacts: updatedContacts })
}

addRandom = () => {
    const randomContact = contactsDb[Math.floor(Math.random() * contactsDb.length)]
    const contactsToUpdate = this.state.contacts
    contactsToUpdate.push(randomContact)
    this.setState({contacts: contactsToUpdate})
}

sortByPop = () => {
    const sortedPop = this.state.contacts.sort((a,b) => {return b.popularity - a.popularity})
    this.setState({contacts:sortedPop})
}

sortByName = () => {
    const sortedByName = this.state.contacts.sort((a,b) => {return a.name.localeCompare(b.name)})
    this.setState({contacts:sortedByName})
}

render(){
    return(
        <div>
        <h1>Iron Contacts</h1>
            <div className="addSortButtons">
                <button onClick={this.addRandom}>Add a random contact</button>
                <button onClick={this.sortByName}>Sort by name</button>
                <button onClick={this.sortByPop}>Sort by popularity</button>
            </div>
            <div>
                <h3>Picture</h3>
                <h3>Name</h3>
                <h3>Popularity</h3>
            </div>
            <ul>
            {
                this.state.contacts.map((contactObj) => {
                    return (<Card key={contactObj.id} {...contactObj} removeContact={this.deleteTheContact} />)
                })
            }
            </ul>
        </div>
    )
}
}