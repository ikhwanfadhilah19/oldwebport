//Script Contact Form
const scriptURL = 'https://script.google.com/macros/s/AKfycbyKhLTN5gFKiEf42T9WGgMJyqZ-tLYuVAvqmwBfSEu8HHDX_64Fk1i9aBiOoyfCUcfa/exec'
	const form = document.forms['website-contact-form']
	const btnKirim = document.querySelector(".btn-kirim");
      	const btnLoading = document.querySelector(".btn-loading");
      	const myAlert = document.querySelector(".my-alert");

	form.addEventListener("submit", (e) => {
		e.preventDefault();
        // Ketika tombol submit diklik
        // Tampilkan tombol loading, hilangkan tombol kirim
        btnLoading.classList.toggle("d-none");
        btnKirim.classList.toggle("d-none");
        fetch(scriptURL, { method: "POST", body: new FormData(form) })
        .then((response) => {
            // Tampilkan tombol kirim, hilangkan tombol loading
            btnLoading.classList.toggle("d-none");
            btnKirim.classList.toggle("d-none");
            // Tampilkan Alert
            myAlert.classList.toggle("d-none");
            // Reset Form nya
            form.reset();
        	console.log("Success!", response);
        })
        .catch((error) => console.error("Error!", error.message));
	});
