from flask import Flask, render_template, request, session, redirect, url_for
import random

app = Flask(__name__)
app.secret_key = "secret123"   # Needed for storing score in session

CHOICES = ["Rock", "Paper", "Scissors"]
TARGET_SCORE = 5  # Winner when score reaches 5


def determine_winner(player, computer):
    if player == computer:
        return "Tie"
    elif (
        (player == "Rock" and computer == "Scissors") or
        (player == "Paper" and computer == "Rock") or
        (player == "Scissors" and computer == "Paper")
    ):
        return "Player"
    else:
        return "Computer"


@app.route("/", methods=["GET", "POST"])
def index():
    # Initialize session variables
    if "player_score" not in session:
        session["player_score"] = 0
        session["computer_score"] = 0

    result = ""
    player = None
    computer = None
    winner = None

    if request.method == "POST":
        # Restart game
        if "restart" in request.form:
            session["player_score"] = 0
            session["computer_score"] = 0
            return redirect(url_for("index"))

        # Admit defeat
        if "defeat" in request.form:
            session["computer_score"] = TARGET_SCORE
            winner = "Computer"
            return render_template("index.html", **locals())

        # Normal gameplay
        player = request.form["choice"]
        computer = random.choice(CHOICES)
        outcome = determine_winner(player, computer)

        if outcome == "Player":
            session["player_score"] += 1
            result = "You Win!"
        elif outcome == "Computer":
            session["computer_score"] += 1
            result = "You Lose!"
        else:
            result = "It's a Tie!"

        # Check for final winner
        if session["player_score"] >= TARGET_SCORE:
            winner = "Player"
        elif session["computer_score"] >= TARGET_SCORE:
            winner = "Computer"

    return render_template("index.html",
                           result=result,
                           player=player,
                           computer=computer,
                           player_score=session["player_score"],
                           computer_score=session["computer_score"],
                           target=TARGET_SCORE,
                           winner=winner)


if __name__ == "__main__":
    app.run(debug=True)

