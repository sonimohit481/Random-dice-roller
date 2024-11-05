
    document.querySelector("#roll").addEventListener("click", Roll);

    function Roll(event) {
        event.preventDefault();

        let X1 = Math.floor(Math.random() * (7 - 1) + 1);
        let X2 = Math.floor(Math.random() * (7 - 1) + 1);
        let X3 = Math.floor(Math.random() * (7 - 1) + 1);

        document.querySelector("#m1").innerText = "";
        document.querySelector("#m2").innerText = "";
        document.querySelector("#m3").innerText = "";

        document.querySelector("#m1").append("Member 1 Score: " + X1);
        document.querySelector("#m2").append("Member 2 Score: " + X2);
        document.querySelector("#m3").append("Member 3 Score: " + X3);

        //   If all draw
        if (X1 === X2 && X2 === X3) {
            document.querySelector("#winner").innerText = "Its A Draw";

            document.querySelector("#member-1").style.backgroundColor =
                "rgb(61, 202, 245)";
            document.querySelector("#member-2").style.backgroundColor =
                "rgb(61, 202, 245)";
            document.querySelector("#member-3").style.backgroundColor =
                "rgb(61, 202, 245)";
        }
        //   Any two
        else if (X1 === X2 || X2 === X3 || X1 === X3) {
            if (X1 === X2) {
                document.querySelector("#winner").innerText =
                    "Its A Draw Between Member 1 and Member 2";

                document.querySelector("#member-1").style.backgroundColor =
                    "rgb(61, 202, 245)";
                document.querySelector("#member-2").style.backgroundColor =
                    "rgb(61, 202, 245)";
                document.querySelector("#member-3").style.backgroundColor =
                    "rrgb(238, 250, 5)";
            } else if (X1 == X3) {
                document.querySelector("#winner").innerText =
                    "Its A Draw Between Member 1 and Member 3";

                document.querySelector("#member-1").style.backgroundColor =
                    "rgb(61, 202, 245)";
                document.querySelector("#member-2").style.backgroundColor =
                    "rgb(238, 250, 5)";
                document.querySelector("#member-3").style.backgroundColor =
                    "rgb(61, 202, 245)";
            } else {
                document.querySelector("#winner").innerText =
                    "Its A Draw Between Member 2 and Member 3";

                document.querySelector("#member-1").style.backgroundColor =
                    "rgb(238, 250, 5)";
                document.querySelector("#member-2").style.backgroundColor =
                    "rgb(61, 202, 245)";
                document.querySelector("#member-3").style.backgroundColor =
                    "rgb(61, 202, 245)";
            }
        }

        //   Member 1
        else if (X1 > X2 && X1 > X3) {
            if (X2 > X3) {
                document.querySelector("#winner").innerText = "Member 1 Wins";
                document.querySelector("#winner").style.color = "rgb(68, 242, 15)";

                document.querySelector("#member-1").style.backgroundColor =
                    "rgb(68, 242, 15)";
                document.querySelector("#member-2").style.backgroundColor =
                    "rgb(238, 250, 5)";
                document.querySelector("#member-3").style.backgroundColor =
                    "rgb(240, 70, 70)";
            } else {
                document.querySelector("#winner").innerText = "Member 1 Wins";
                document.querySelector("#winner").style.color = "rgb(68, 242, 15)";

                document.querySelector("#member-1").style.backgroundColor =
                    "rgb(68, 242, 15)";
                document.querySelector("#member-2").style.backgroundColor =
                    "rgb(240, 70, 70)";
                document.querySelector("#member-3").style.backgroundColor =
                    "rgb(238, 250, 5)";
            }
        } else if (X2 > X1 && X2 > X3) {
            if (X1 > X3) {
                document.querySelector("#winner").innerText = "Member 2 Wins";
                document.querySelector("#winner").style.color = "rgb(68, 242, 15)";

                document.querySelector("#member-1").style.backgroundColor =
                    "rgb(238, 250, 5)";
                document.querySelector("#member-2").style.backgroundColor =
                    "rgb(68, 242, 15)";
                document.querySelector("#member-3").style.backgroundColor =
                    "rgb(240, 70, 70)";
            } else {
                document.querySelector("#winner").innerText = "Member 2 Wins";
                document.querySelector("#winner").style.color = "rgb(68, 242, 15)";

                document.querySelector("#member-1").style.backgroundColor =
                    "rgb(240, 70, 70)";
                document.querySelector("#member-2").style.backgroundColor =
                    "rgb(68, 242, 15)";
                document.querySelector("#member-3").style.backgroundColor =
                    "rgb(238, 250, 5)";
            }
        } else if (X3 > X1 && X3 > X2) {
            if (X1 > X3) {
                document.querySelector("#winner").innerText = "Member 3 Wins";
                document.querySelector("#winner").style.color = "rgb(68, 242, 15)";

                document.querySelector("#member-1").style.backgroundColor =
                    "rgb(238, 250, 5)";
                document.querySelector("#member-2").style.backgroundColor =
                    "rgb(240, 70, 70)";
                document.querySelector("#member-3").style.backgroundColor =
                    "rgb(68, 242, 15)";
            } else {
                document.querySelector("#winner").innerText = "Member 3 Wins";
                document.querySelector("#winner").style.color = "rgb(68, 242, 15)";

                document.querySelector("#member-1").style.backgroundColor =
                    "rgb(240, 70, 70)";
                document.querySelector("#member-2").style.backgroundColor =
                    "rgb(238, 250, 5)";
                document.querySelector("#member-3").style.backgroundColor =
                    "rgb(68, 242, 15)";
            }
        }
    }
