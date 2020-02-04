body {
  background-color: #282c34;
}

#root {
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  text-align: center;
}

.App {
  text-align: center;
}

.App-logo {
  animation: App-logo-spin infinite 20s linear;
  height: 40vmin;
  pointer-events: none;
}

.loader-logo {
  animation: App-logo-spin infinite 5s linear;
  height: 4vmin;
  pointer-events: none;
  color: #282c34;
}

@keyframes App-logo-spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

.App-link {
  color: #61dafb;
}

.App-header,
.results {
  flex: 1;
  background-color: #282c34;
  color: white;
  font-weight: bold;
}

.container {
  display: flex;
  flex: 1;
  flex-direction: column;
  padding-bottom: 5vh;
}

.quiz {
  background-color: white;
  margin: 0 10vw;
  min-width: 80vw;
  max-width: 80vw;
}

.quiz-content,
.quiz-not-found {
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.box {
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: space-between;
}

.question {
  margin: 0 1vw 0vh 1vw;
}

.footer {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
}

ul {
  list-style: none;
  padding: 0 5vw;
}

.listItem {
  padding-bottom: 5vh;
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: calc(18px + 2vmin);
}

.results li {
  text-align: left;
  flex-direction: row;
  display: flex;
}

.resultIcon {
  min-width: 8vw;
}

@keyframes sheen {
  0% {
    transform: skewY(-45deg) translateX(0);
  }
  80% {
    transform: skewY(-45deg) translateX(12.5em);
  }
}

.btn {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  text-align: center;
  text-decoration: none;
  display: inline-block;
  transition: all 0.2s ease-in-out;
  position: relative;
  overflow: hidden;

  font-weight: 500;
  font-size: 1.5em;
  font-weight: bold;

  color: #282c34;
  padding: 0.3vh 5vh;
  background-color: #61dafb;
  border-radius: 300px;
}

.btn-loading {
  border-color: #61dafb;
  background-color: #282c34;
  color: #61dafb;
}

.btn:before {
  content: "";
  background-color: rgba(255, 255, 255, 0.5);
  height: 100%;
  width: 2.5em;
  display: block;
  position: absolute;
  top: 0;
  left: -4.5em;
  transform: skewX(-45deg) translateX(0);
  transition: none;
}

.btn-inv:hover {
  color: #ffffff;
}

.btn:hover:before {
  transform: skewX(-45deg) translateX(18em);
  transition: all 0.7s ease-in-out;
}

.btn-true {
  background-color: #cdfb61;
  border-radius: 5px;
  padding: 5vh 10vw;
}

.btn-false {
  background-color: #fbc261;
  border-radius: 5px;
  padding: 5vh 10vw;
}

.result-true {
  color: #cdfb61;
}

.result-false {
  color: #fbc261;
}

.btn-true:focus,
.btn-false:focus {
  outline: none;
}

.btn-exit {
  color: #61dafb;
  background-color: #282c34;
}
