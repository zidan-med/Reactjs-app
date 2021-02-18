import React, { Component } from 'react'

export class Users extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            users: [
                {
                    login: "mojombo",
                    id: 1,
                    avatar_url:"https://avatars0.githubusercontent.com/u/1?v=4",
                    html_url:"https://github.com/mojombo",
                    repos_url:"https://api.github.com/users/mojombo/repos"
                },
                {
                    login: "defunkt",
                    id: 2,
                    avatar_url:"https://avatars0.githubusercontent.com/u/2?v=4",
                    html_url:"https://github.com/defunkt",
                    repos_url:"https://api.github.com/users/defunkt/repos"
                },
                {
                    login: "pjhyett",
                    id: 3,
                    avatar_url:"https://avatars0.githubusercontent.com/u/3?v=4",
                    url: "https://api.github.com/users/pjhyett",
                    html_url:"https://github.com/pjhyett",
                    repos_url:"https://api.github.com/users/pjhyett/repos"
                }
            ]
            
             
        }
    }
    
    render() {
        return (
            <div>
                <div className="row">
        
                
                {this.state.users.map(user => (
                    <div className="col-md-4">
                        <div class="card">
                            <img class="card-img-top" src={user.avatar_url} alt=""/>
                            <div class="card-body">
                                <h4 class="card-title">{user.login}}</h4>
                                <p class="card-text">Text</p>
                                    <a href={user.html_url} className="btn-success" href={user.html_url}>Show more</a>
                                    <a href={user.repos_url} className="btn-warning" href={user.repos_url}>Repositories</a>
                            </div>
                        </div>
                    </div>
                ))}
                </div>
            </div>
        )
    }
}

export default Users;
