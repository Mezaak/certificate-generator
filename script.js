window.jsPDF = window.jspdf.jsPDF;

// İmza görseli base64 formatında
const signatureImage = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAA..."; // Buraya kendi imzanızın base64 kodunu ekleyin

document.getElementById('certificateForm').addEventListener('submit', async function(e) {
    e.preventDefault();
    
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const currentDate = new Date().toLocaleDateString('en-US');
    
    // Create PDF
    const doc = new jsPDF({
        orientation: 'landscape',
        unit: 'mm',
        format: 'a4'
    });
    
    // Background color
    doc.setFillColor(245, 245, 245);
    doc.rect(0, 0, 297, 210, 'F');
    
    // Decorative border
    doc.setDrawColor(44, 62, 80);
    doc.setLineWidth(2);
    doc.rect(15, 15, 267, 180);
    doc.setLineWidth(0.5);
    doc.rect(20, 20, 257, 170);
    
    // Add corner decorations
    const cornerSize = 30;
    // Top left corner
    doc.setDrawColor(44, 62, 80);
    doc.setLineWidth(1);
    doc.line(15, 25, 45, 25);
    doc.line(25, 15, 25, 45);
    
    // Top right corner
    doc.line(252, 25, 282, 25);
    doc.line(272, 15, 272, 45);
    
    // Bottom left corner
    doc.line(15, 185, 45, 185);
    doc.line(25, 165, 25, 195);
    
    // Bottom right corner
    doc.line(252, 185, 282, 185);
    doc.line(272, 165, 272, 195);
    
    // Add decorative lines
    doc.setDrawColor(44, 62, 80, 0.5);
    doc.setLineWidth(0.5);
    doc.line(40, 50, 257, 50);
    doc.line(40, 160, 257, 160);
    
    // Title with shadow effect
    doc.setFillColor(44, 62, 80);
    doc.setTextColor(44, 62, 80);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(42);
    doc.text('CERTIFICATE', 148.5, 45, { align: 'center' });
    
    // Subtitle with elegant font
    doc.setFontSize(16);
    doc.setFont('helvetica', 'italic');
    doc.text('OF ACHIEVEMENT', 148.5, 55, { align: 'center' });
    
    // Decorative line
    doc.setLineWidth(0.5);
    doc.line(98.5, 60, 198.5, 60);
    
    // Main text
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(14);
    doc.text('This is to certify that', 148.5, 80, { align: 'center' });
    
    // Name
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(32);
    doc.setTextColor(44, 62, 80);
    doc.text(`${firstName} ${lastName}`, 148.5, 100, { align: 'center' });
    
    // Description
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(14);
    doc.text('has successfully demonstrated outstanding achievement', 148.5, 120, { align: 'center' });
    doc.text('and is hereby awarded this certificate of excellence', 148.5, 130, { align: 'center' });
    
    // Date section
    doc.setFontSize(12);
    doc.text(currentDate, 148.5, 155, { align: 'center' });
    doc.line(128.5, 158, 168.5, 158);
    doc.setFontSize(10);
    doc.text('Date of Issue', 148.5, 165, { align: 'center' });
    
    // İmza ekleme
    doc.addImage('signature.png', 'PNG', 128.5, 170, 40, 20);
    
    // Add a seal effect
    doc.setDrawColor(44, 62, 80);
    doc.setLineWidth(0.5);
    doc.circle(240, 150, 15);
    doc.circle(240, 150, 12);
    
    // Add ribbon effect
    doc.setFillColor(44, 62, 80);
    doc.triangle(225, 150, 255, 150, 240, 170, 'F');
    
    // Open in new tab
    window.open(doc.output('bloburl'), '_blank');
}); 