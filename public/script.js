const form = document.querySelector('#forma');
const mejl = document.querySelector('#mejl');
const psw = document.querySelector('#psw');
const ime = document.querySelector('#ime');

form.onsubmit = async e => {
    e.preventDefault();
    try {
        const body = { mejl: mejl.value, lozinka: psw.value, ime: ime.value }
        const res = await fetch('/api/users', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(body)
        });
        const json = await res.json();
        if (!json.ok) throw new Error(json.message)
        alert("uspesno");
    } catch (error) {
        alert(error.message);
    }
}