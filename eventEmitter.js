class EventEmitter {
  constructor() {
    this.events = new Map();
  }

  subscribe(eventName, callback) {
    if (!this.events.has(eventName)) {
      this.events.set(eventName, []);
    }
    this.events.get(eventName).push(callback);

    return {
      unsubscribe: () => {
        const callbacks = this.events.get(eventName);
        if (callbacks) {
          this.events.set(
            eventName,
            callbacks.filter((cb) => cb !== callback)
          );
        }
      },
    };
  }

  emit(eventName, args = []) {
    if (!this.events.has(eventName)) return [];
    return this.events.get(eventName).map((cb) => cb(...args));
  }
}

const exp = new EventEmitter();
const user1 = exp.subscribe("greeting", () => "Ayyooooooooo");
const user2 = exp.subscribe("greeting", () => "Whatsuppppppp");
console.log(exp.emit("greeting"));
user1.unsubscribe();
console.log(exp.emit("greeting"));
