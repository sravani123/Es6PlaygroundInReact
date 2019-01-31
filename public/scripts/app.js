'use strict';

console.log("App.js is running");

// JSX - javascript XML
// If statements 
// Ternary operators
// Logical operators
var app = { title: 'Sravani first react app', subtitle: 'this app contains the features dynamica data rendering', options: ['One', 'Two'] };

var template = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        'This is Basic app of React app'
    ),
    app.subtitle && React.createElement(
        'p',
        null,
        ' ',
        app.subtitle
    ),
    React.createElement(
        'p',
        null,
        ' ',
        app.options.length > 0 ? 'Here are your options' : 'No options'
    )
);
var userName = 'Sravani';
var userAge = 24;
var userLocation = 'Singapore';
var user = { name: "sravani", age: 26, location: 'Hyderabad' };
function getLocation(location) {
    if (location) {
        return React.createElement(
            'p',
            null,
            'Location: ',
            user.location
        );
    }
}
var templateTwo = React.createElement(
    'div',
    null,
    React.createElement(
        'h1',
        null,
        user.name ? user.name + ' Komati' : 'Annonymous Name'
    ),
    user.age && user.Age >= 18 && React.createElement(
        'p',
        null,
        'Age: ',
        user.age
    ),
    getLocation(user.location)
);
var count = 0;
var myId = 'button-id';
var addOne = function addOne() {
    count++;
    renderCounterApp();
    console.log('add one method called');
};
var minusOne = function minusOne() {
    count--;
    renderCounterApp();

    console.log('minus one method called');
};
var reset = function reset() {
    count = 0;
    renderCounterApp();

    console.log('Reset ');
};
var templateThree = React.createElement(
    'div',
    null,
    React.createElement(
        'p',
        null,
        'Count is ',
        count
    ),
    React.createElement(
        'button',
        { onClick: addOne, className: 'button' },
        '+1'
    ),
    React.createElement(
        'button',
        { onClick: minusOne, className: 'button' },
        '-1'
    ),
    React.createElement(
        'button',
        { onClick: reset, className: 'button' },
        'reset'
    )
);
var appRoot = document.getElementById('app');

var renderCounterApp = function renderCounterApp() {
    var templateThree = React.createElement(
        'div',
        null,
        React.createElement(
            'p',
            null,
            'Count is ',
            count
        ),
        React.createElement(
            'button',
            { onClick: addOne, className: 'button' },
            '+1'
        ),
        React.createElement(
            'button',
            { onClick: minusOne, className: 'button' },
            '-1'
        ),
        React.createElement(
            'button',
            { onClick: reset, className: 'button' },
            'reset'
        )
    );
    ReactDOM.render(templateThree, appRoot);
};
renderCounterApp();
