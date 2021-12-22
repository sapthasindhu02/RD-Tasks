function Greeting(name) {
    this.name = name;
  }
  Greeting.prototype.sayHello = function() {
    return `Hello ${this.name}`;
  };

  Greeting.prototype.sayBye = function() {
    return `Bye ${this.name}`;
  };
  function construct(Class, ...args) {
    return new Class(...args);
 }
 const greeting = construct(Greeting, 'John');
 function factory() {
    return {
      createGreeting() {
        return construct(Greeting, "john");
      }
    }
  }