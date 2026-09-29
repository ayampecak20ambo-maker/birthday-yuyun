/* =========================================
   MULAI PERJALANAN
========================================= */

function mulaiPerjalanan() {

    const music =
        document.getElementById("birthdayMusic");

    music.play();

    const opening =
        document.getElementById("opening");

    opening.style.transition =
        "opacity 1s ease";

    opening.style.opacity = "0";

    setTimeout(() => {

        opening.style.display = "none";

        document.getElementById("memory1")
            .style.display = "flex";

    }, 1000);
}


/* =========================================
   MEMORY 1 → MEMORY 2
========================================= */

function keMemory2() {

    document.getElementById("memory1")
        .style.display = "none";

    document.getElementById("memory2")
        .style.display = "flex";
}


/* =========================================
   MEMORY 2 → MEMORY 1
========================================= */

function keMemory1() {

    document.getElementById("memory2")
        .style.display = "none";

    document.getElementById("memory1")
        .style.display = "flex";
}


/* =========================================
   MEMORY 2 → MEMORY 3
========================================= */

function keMemory3() {

    document.getElementById("memory2")
        .style.display = "none";

    document.getElementById("memory3")
        .style.display = "flex";
}


/* =========================================
   MEMORY 3 → MEMORY 4
========================================= */

function keMemory4() {

    document.getElementById("memory3")
        .style.display = "none";

    document.getElementById("memory4")
        .style.display = "flex";
}


/* =========================================
   MEMORY 4 → SURPRISE
========================================= */

function bukaSurprise() {

    document.getElementById("memory4")
        .style.display = "none";

    document.getElementById("surprise")
        .style.display = "flex";
}


/* =========================================
   SURPRISE → BIRTHDAY
========================================= */

function bukaBirthday() {

    document.getElementById("surprise")
        .style.display = "none";

    document.getElementById("birthday")
        .style.display = "flex";
}


/* =========================================
   BIRTHDAY → FINAL
========================================= */

function bukaFinal() {

    document.getElementById("birthday")
        .style.display = "none";

    document.getElementById("final")
        .style.display = "flex";
}