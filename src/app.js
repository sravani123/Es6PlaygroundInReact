console.log("App.js is running");

// JSX - javascript XML
// If statements 
// Ternary operators
// Logical operators
var app = { title: 'Sravani first react app', subtitle: 'this app contains the features dynamica data rendering', options: ['One', 'Two'] };

var template = (<div>
    <h1>This is Basic app of React app</h1>
    {app.subtitle && <p> {app.subtitle}</p>}
    <p> {app.options.length > 0 ? 'Here are your options' : 'No options'}</p>
</div>);
var userName = 'Sravani';
var userAge = 24;
var userLocation = 'Singapore';
var user = { name: "sravani", age: 26, location: 'Hyderabad' };
function getLocation(location) {
    if (location) {
        return <p>Location: {user.location}</p>;
    }
}
var templateTwo = (
    <div>
        <h1>{user.name ? user.name + ' Komati' : 'Annonymous Name'}</h1>
        {(user.age && user.Age >= 18) && <p>Age: {user.age}</p>}
        {getLocation(user.location)}
    </div>
);

var appRoot = document.getElementById('app');
ReactDOM.render(template, appRoot);