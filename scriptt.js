document.addEventListener('DOMContentLoaded', function() {
    const medicineImage = document.getElementById('medicineImage');
    const imagePreview = document.getElementById('imagePreview');
    const previewImage = document.getElementById('previewImage');
    const defaultText = imagePreview.querySelector('.default-text');

    medicineImage.addEventListener('change', function() {
        const file = this.files[0];
        if (file) {
            const reader = new FileReader();
            
            reader.addEventListener('load', function() {
                previewImage.style.display = 'block';
                previewImage.setAttribute('src', this.result);
                defaultText.style.display = 'none';
            });
            
            reader.readAsDataURL(file);
        }
    });

   
    const medicationForm = document.getElementById('medicationForm');
    const schedulesContainer = document.getElementById('schedulesContainer');

    medicationForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        
        const medicineName = document.getElementById('medicine-name').value;
        const dosage = document.getElementById('dosage').value;
        const time = document.getElementById('time').value;
        const frequency = document.getElementById('frequency').value;
        const medicineImage = document.getElementById('medicineImage').files[0];
        
      
        const scheduleCard = document.createElement('div');
        scheduleCard.className = 'medication-card';
        
        let imageSrc = '';
        if (medicineImage) {
            const reader = new FileReader();
            reader.onload = function(e) {
                imageSrc = e.target.result;
                scheduleCard.innerHTML = `
                    ${imageSrc ? `<img src="${imageSrc}" alt="${medicineName}" class="medication-image">` : ''}
                    <div class="medication-details">
                        <h3>${medicineName}</h3>
                        <p><strong>Dosage:</strong> ${dosage}</p>
                        <p><strong>Time:</strong> ${time}</p>
                        <p><strong>Frequency:</strong> ${getFrequencyText(frequency)}</p>
                        <button class="delete-btn">Delete Schedule</button>
                    </div>
                `;
                
            
                scheduleCard.querySelector('.delete-btn').addEventListener('click', function() {
                    scheduleCard.remove();
                });
            };
            reader.readAsDataURL(medicineImage);
        } else {
            scheduleCard.innerHTML = `
                <div class="medication-details">
                    <h3>${medicineName}</h3>
                    <p><strong>Dosage:</strong> ${dosage}</p>
                    <p><strong>Time:</strong> ${time}</p>
                    <p><strong>Frequency:</strong> ${getFrequencyText(frequency)}</p>
                    <button class="delete-btn">Delete Schedule</button>
                </div>
            `;
            
            
            scheduleCard.querySelector('.delete-btn').addEventListener('click', function() {
                scheduleCard.remove();
            });
        }
        
        
        schedulesContainer.appendChild(scheduleCard);
        
       
        medicationForm.reset();
        previewImage.style.display = 'none';
        previewImage.setAttribute('src', '#');
        defaultText.style.display = 'block';
    });
    
    function getFrequencyText(frequencyValue) {
        switch(frequencyValue) {
            case 'once': return 'Once daily';
            case 'twice': return 'Twice daily';
            case 'thrice': return 'Three times daily';
            case 'custom': return 'Custom schedule';
            default: return frequencyValue;
        }
    }
});