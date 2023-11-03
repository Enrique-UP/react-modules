import './App.css';

function App() {
	const navbar = document.querySelector('section .right .js_area');
	var main = document.querySelector("main").offsetHeight;
	console.log(main);

	var header = document.querySelector("main header").offsetHeight;
	console.log(header);

	var footer = document.querySelector("main footer").offsetHeight;
	console.log(footer);

	const onScroll = () => {    
	const scroll = document.documentElement.scrollTop
	  if (scroll >= header && scroll <= main - footer - 200) {
		navbar.classList.add("active");
	  }
	  else {
		navbar.classList.remove("active");
	  }
	}
  window.addEventListener('scroll', onScroll);
  return (
    <main>
	  <header>Header</header>
	  <section>
		<div class="left">Left</div>
		<div class="right">
		  <div class="js_area">Fixed/Unfixed</div>
		</div>
	  </section>
	  <footer>Footer</footer>
	</main>
  );
}

export default App;
