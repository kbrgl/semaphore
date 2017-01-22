# Semaphore
## Installing
Clone the repo somewhere in your website directory, then include this in your HTML:
```html
<link rel="stylesheet" type="text/css" href="/path/to/semaphore.css">
<script type="application/javascript" src="/path/to/semaphore.js"></script>
```

## Using Semaphore
```js
// Success (green by default)
semaphore("success", "And we have lift-off!");

// Error (red by default)
semaphore("error", "Houston, we have a problem.");

// Warning (yellow by default)
semaphore("warning", "⚠️");

// Normal (white by default)
semaphore("put anything here", "Hey-o!");
semaphore("regular", "Hello, world!");
semaphore("normal", "Woah!");
```
