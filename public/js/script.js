// PLAYER
    
const player1rock  = document.getElementById("player1-rock");
const player1paper  = document.getElementById("player1-paper");
const player1Scissors  = document.getElementById("player1-scissors");
const backgroundRock  = document.getElementById("backgroundRock");
const backgroundPaper  = document.getElementById("backgroundPaper");
const backgroundScissors  = document.getElementById("backgroundScissors");

// RESULT
const onlyVs = document.querySelector(".only-vs");
const resultText = document.querySelector(".result-text");

// COM
const backgroundRockCom  = document.getElementById("backgroundRock-COM");
const backgroundPaperCom  = document.getElementById("backgroundPaper-COM");
const backgroundScissorsCom  = document.getElementById("backgroundScissors-COM");

// PLAY AGAIN
const refreshPage = document.getElementById("refresh-page");

class Player {
    rock() {
        player1rock.addEventListener("click", () => {
            console.log(player1rock.id)
            const hands = [comRock, comPaper, comScissors];
            const hand = hands[Math.floor(Math.random()*hands.length)].id;

            backgroundRock.style.background = "#C4C4C4";

            function set(duration1, duration2, duration3) {
                setTimeout(() => {
                    backgroundRockCom.style.background = "#C4C4C4";
                    setTimeout(() => {
                        backgroundRockCom.style.background = "";
                    }, 300)
                }, duration1)
                setTimeout(() => {
                    backgroundPaperCom.style.background = "#C4C4C4";
                    setTimeout(() => {
                        backgroundPaperCom.style.background = "";
                    }, 300)
                }, duration2)
                setTimeout(() => {
                    backgroundScissorsCom.style.background = "#C4C4C4";
                    setTimeout(() => {
                        backgroundScissorsCom.style.background = "";
                    }, 300)
                }, duration3)
            }

            for(let i = 0; i < 10; i++) {
                if(i === 1) {
                    set(300, 600, 900);
                } else if (i === 2){
                    set(1200, 1500, 1800);
                } else if (i === 3){
                    set(2100, 2400, 2700);
                } else if(i === 4){
                    set(3000, 3300, 3600)
                }
            }

            setTimeout(() => {
                backgroundRockCom.style.background = "#C4C4C4";
                setTimeout(() => {
                    if(hand === "comRock") {
                        onlyVs.className = "result-draw";
                        resultText.innerHTML = "DRAW";
                        backgroundRockCom.style.background = "#C4C4C4";   
                        console.log("HASIL DRAW")
                        setTimeout(() => {
                            // if(confirm("Mau main lagi? Klik OK")){
                            //     history.go(0);
                            // } else {
                            //     return;
                            // }
                        }, 1500)
                    } else {
                        backgroundRockCom.style.background = "";
                    }
                }, 300)
            }, 3900)

            if(hand === "comRock") {
                return;
            }

            console.log(hand)

            setTimeout(() => {
                backgroundPaperCom.style.background = "#C4C4C4";
                setTimeout(() => {
                    if(hand === "comPaper") {
                        onlyVs.className = "result";
                        resultText.innerHTML = "COM <br> WIN";
                        backgroundPaperCom.style.background = "#C4C4C4";
                        console.log("COM WIN");
                        setTimeout(() => {
                  
                        }, 1500)
                    } else {
                        backgroundPaperCom.style.background = "";
                    }
                }, 300)
            }, 4200)

            if(hand === "comPaper"){
                return;
            }
            
            setTimeout(() => {
                backgroundScissorsCom.style.background = "#C4C4C4";
                setTimeout(() => {
                    if(hand === "comScissors") {
                        onlyVs.className = "result";
                        resultText.innerHTML = "PLAYER 1 <br> WIN";
                        backgroundScissorsCom.style.background = "#C4C4C4";
                        console.log("PLAYER WIN");
                        setTimeout(() => {
                   
                        }, 1500)
                    } else {
                        backgroundScissorsCom.style.background = "";
                    }
                }, 300)
            }, 4500)
        })
    }  

    paper() {
        player1paper.addEventListener("click", () => {
            console.log(player1paper.id)
            const hands = [comRock, comPaper, comScissors];
            const hand = hands[Math.floor(Math.random()*hands.length)].id;
            console.log(hand);

            backgroundPaper.style.background = "#C4C4C4";

            function set(duration1, duration2, duration3) {
                setTimeout(() => {
                    backgroundRockCom.style.background = "#C4C4C4";
                    setTimeout(() => {
                        backgroundRockCom.style.background = "";
                    }, 300)
                }, duration1);
                setTimeout(() => {
                    backgroundPaperCom.style.background = "#C4C4C4";
                    setTimeout(() => {
                        backgroundPaperCom.style.background = "";
                    }, 300);
                }, duration2);
                setTimeout(() => {
                    backgroundScissorsCom.style.background = "#C4C4C4";
                    setTimeout(() => {
                        backgroundScissorsCom.style.background = "";
                    }, 300)
                }, duration3)
            }

            for (let i = 0; i < 10; i++) {
                if(i === 1){
                    set(300, 600, 900);
                } else if (i === 2) {
                    set(1200, 1500, 1800);
                } else if (i === 3) {
                    set(2100, 2400, 2700);
                } else if (i === 4) {
                    set(3000, 3300, 3600)
                }
            }
        
                setTimeout(() => {
                    backgroundRockCom.style.background = "#C4C4C4";
                    setTimeout(() => {
                        if(hand === "comRock") {
                            onlyVs.className = "result";
                            resultText.innerHTML = "PLAYER 1 <br> WIN";
                            backgroundRockCom.style.background = "#C4C4C4";
                            console.log("PLAYER WIN");
                            setTimeout(() => {
                    
                            }, 1500)
                        } else {
                            backgroundRockCom.style.background = "";
                        }
                    }, 300)
                }, 3900)
        
                if(hand === "comRock") {
                    return;
                }

                setTimeout(() => {
                    backgroundPaperCom.style.background = "#C4C4C4";
                    setTimeout(() => {
                        if(hand === "comPaper") {
                            onlyVs.className = "result-draw";
                            resultText.innerHTML = "DRAW";
                            backgroundPaperCom.style.background = "#C4C4C4";
                            console.log("DRAW");
                            setTimeout(() => {
                      
                            }, 1500)
                        } else {
                            backgroundPaperCom.style.background = "";
                        }
                    }, 300);
                }, 4200)

                if (hand === "comPaper") {
                    return;
                }

                setTimeout(() => {
                    backgroundScissors.style.background = "#C4C4C4";
                    setTimeout(() => {
                        if(hand === "comScissors") {
                            onlyVs.className = "result";
                            resultText.innerHTML = "COM WIN";
                            backgroundScissors.style.background = "#C4C4C4";
                            console.log("WIN");
                            setTimeout(() => {
                         
                            }, 1500)
                        } else {
                            backgroundScissors.style.background = "";
                        }
                    }, 300)
                }, 4500)
             })
        }

    scissors() {
        player1Scissors.addEventListener("click", () => {
            console.log(player1Scissors.id)
            const hands = [comRock, comPaper, comScissors];
            const hand = hands[Math.floor(Math.random()*hands.length)].id;
            console.log(hand);

            backgroundScissors.style.background = "#C4C4C4";

            function set(duration1, duration2, duration3) {
                setTimeout(() => {
                    backgroundRockCom.style.background = "#C4C4C4";
                    setTimeout(() => {
                        backgroundRockCom.style.background = "";
                    }, 300)
                }, duration1)
                setTimeout(() => {
                    backgroundPaperCom.style.background = "#C4C4C4";
                    setTimeout(() => {
                        backgroundPaperCom.style.background = "";
                    }, 300)
                }, duration2)
                setTimeout(() => {
                    backgroundScissorsCom.style.background = "#C4C4C4";
                    setTimeout(() => {
                        backgroundScissorsCom.style.background = "";
                    }, 300)
                }, duration3)
            }

            for (let i = 0; i < 10; i++) {
                if (i === 1){
                    set (300, 600, 900);
                } else if (i === 2) {
                    set(1200, 1500, 1800);
                } else if (i === 3) {
                    set(2100, 2400, 2700);
                } else if (i === 4) {
                    set(3000, 3300, 3600);
                }
            }

            setTimeout(() => {
                backgroundRockCom.style.background = "#C4C4C4";
                setTimeout(() => {
                    if (hand === "comRock"){
                        onlyVs.className = "result";
                        resultText.innerHTML = "COM <br> WIN";
                        backgroundRockCom.style.background = "#C4C4C4";
                        console.log("COM WIN");
                        setTimeout(() => {
                       
                        }, 1500)
                    } else {
                        backgroundRockCom.style.background = "";
                    }
                }, 300)
            }, 3900)

        if (hand === "comRock") {
            return; 
        }

        setTimeout(() => {
            backgroundPaperCom.style.background = "#C4C4C4";
            setTimeout(() => {
                if (hand === "comPaper") {
                    onlyVs.className = "result";
                    resultText.innerHTML = "PLAYER 1 <br> WIN";
                    backgroundPaperCom.style.background = "#C4C4C4";
                    console.log("PLAYER 1 WIN");
                    setTimeout(() => {
                     
                    }, 1500)
                } else {
                    backgroundPaperCom.style.background ="";
                }
            }, 300)
        }, 4200)
            
        if (hand === "comPaper"){
            return;
        }

        setTimeout (() => {
            backgroundScissorsCom.style.background = "#C4C4C4";
            setTimeout(() => {
                if (hand === "comScissors") {
                    onlyVs.className = "result-draw";
                    resultText.innerHTML = "DRAW";
                    backgroundScissorsCom.style.background = "#C4C4C4";
                    console.log("DRAW");
                    setTimeout(() => {
                      
                    }, 1500)
                } else {
                    backgroundScissorsCom.style.background = "";
                }
            }, 300)
        }, 4500)
    })
}


playAgain() {
    refreshPage.addEventListener("click", () => {
      history.go(0);
    })
  }
}


const main = new Player();

main.rock();
main.paper();
main.scissors();
main.playAgain();
     
