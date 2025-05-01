let menubar = document.querySelector('#menu-bars');
let navbar  = document.querySelector('.navbar');

menubar.onclick = () =>{
    menubar.classList.toggle('fa-times');
    navbar.classList.toggle('active')
}

document.getElementById('prescription-upload').addEventListener('change', function(e) {
    const file = e.target.files[0];
    if (file) {
        if(file.type.match('image.*')) {
            const reader = new FileReader();
            reader.onload = function(e) {
             
                const preview = window.open('', 'Preview', 'width=600,height=600');
                preview.document.write(`
                    <html>
                        <body style="text-align:center;padding:20px;">
                            <h2>Prescription description</h2>
                            <img src="${e.target.result}" style="max-width:100%;max-height:400px;">
                            <div style="margin-top:20px;">
                                <button onclick="window.opener.uploadPrescription()" style="padding:10px 20px;background:#4CAF50;color:white;border:none;cursor:pointer;">
                                    Confirm upload
                                </button>
                                <button onclick="window.close()" style="padding:10px 20px;background:#f44336;color:white;border:none;cursor:pointer;">
                                    cancellation
                                </button>
                            </div>
                        </body>
                    </html>
                `);
            };
            reader.readAsDataURL(file);
        } else {
            if(confirm(`Do you want to upload the file? ${file.name}؟`)) {
             
            }
        }
    }
});

window.uploadPrescription = function() {
    alert('Recipe uploaded successfully!');
    window.close();
};