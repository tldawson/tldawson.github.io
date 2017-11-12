// getElementById wrapper
function $id(id) {
  return document.getElementById(id);
}

// asynchronously fetch the html template partial from the file directory,
// then set its contents to the html of the parent element
function loadHTML(url, id) {
  req = new XMLHttpRequest();
  req.open('GET', url);
  req.send();
  req.onload = () => {
    $id(id).innerHTML = req.responseText; 
  }
}

// use #! to hash
router = new Navigo(null, true, '#!');
router.on({
  // 'content' is the id of the div element inside which we render the HTML
  'code': () => { loadHTML('./html/code.html', 'content') },
  'blog': () => { loadHTML('./html/blog.html', 'content') },
  'contact': () => { loadHTML('./html/contact.html', 'content') }  
});

// set the default route
router.on(() => { loadHTML('./html/code.html', 'content') });

// set the 404 route
router.notFound((query) => { $id('view').innerHTML = '<h3>Couldn\'t find the page you\'re looking for...</h3>'; })

router.resolve();
