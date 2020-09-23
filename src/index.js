import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';

const App = () => {
    return (
        <div className="ui comments container">
            <div className="comment">
                <a className="avatar">
                    <img src={faker.image.avatar()} />
                </a>
                <div className="content">
                    <a className="author">Matt</a>
                    <div className="metadata">
                        <span className="date">Today at 5:42PM</span>
                    </div>
                    <div className="text">
                        How artistic!
                    </div>
                </div>
            </div>
            <div className="comment">
                <a className="avatar">
                    <img src={faker.image.avatar()} />
                </a>
                <div className="content">
                    <a className="author">Matt</a>
                    <div className="metadata">
                        <span className="date">Today at 5:42PM</span>
                    </div>
                    <div className="text">
                        How artistic!
                    </div>
                </div>
            </div>
            <div className="comment">
                <a className="avatar">
                    <img src={faker.image.avatar()} />
                </a>
                <div className="content">
                    <a className="author">Matt</a>
                    <div className="metadata">
                        <span className="date">Today at 5:42PM</span>
                    </div>
                    <div className="text">
                        How artistic!
                    </div>
                </div>
            </div>
        </div>
    )
};

ReactDOM.render(<App />, document.querySelector('#root'));
