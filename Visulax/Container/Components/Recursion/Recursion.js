document.addEventListener("DOMContentLoaded", function () {
    const nQueenLink = document.getElementById("nQueenLink");
    const ratInMazeLink = document.getElementById("ratInMazeLink");
    const nQueenContent = document.getElementById("nQueenContent");
    const ratInMazeContent = document.getElementById("ratInMazeContent");

    nQueenLink.addEventListener("click", function (event) {
        event.preventDefault();
        nQueenContent.style.display = "block";
        ratInMazeContent.style.display = "none";
        nQueenLink.classList.add("active");
        ratInMazeLink.classList.remove("active");
    });

    ratInMazeLink.addEventListener("click", function (event) {
        alert("This feature is not yet available. Please check back later.")
        event.preventDefault();
        ratInMazeContent.style.display = "block";
        nQueenContent.style.display = "none";
        ratInMazeLink.classList.add("active");
        nQueenLink.classList.remove("active");
    });
});
