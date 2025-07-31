:root {
  /* الألوان الأساسية */
  --primary-color: #284764;
  --secondary-color: #7ac242;
  --accent-color: #ff9800;
  --white-color: #ffffff;
  --light-gray: #f8f9fa;
  --dark-gray: #333333;
  --text-color: #333333;
  --text-light: #6c757d;
  
  /* الظلال والانتقالات */
  --shadow-sm: 0 2px 5px rgba(0, 0, 0, 0.1);
  --shadow-md: 0 5px 15px rgba(0, 0, 0, 0.1);
  --shadow-lg: 0 4px 10px rgba(0, 0, 0, 0.3);
  --transition: all 0.3s ease;
}

/* الأساسيات */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  background-color: var(--white-color);
  color: var(--text-color);
  line-height: 1.6;
  overflow-x: hidden;
}

.container {
  width: 90%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 15px;
}

/* الأزرار */
.btn {
  display: inline-block;
  background-color: var(--secondary-color);
  color: var(--white-color);
  padding: 12px 24px;
  border: none;
  border-radius: 5px;
  text-decoration: none;
  font-weight: 500;
  cursor: pointer;
  transition: var(--transition);
  box-shadow: var(--shadow-sm);
  text-align: center;
}

.btn:hover {
  background-color: var(--primary-color);
  transform: translateY(-2px);
  box-shadow: var(--shadow-md);
}

/* العناوين */
.section-title {
  text-align: center;
  margin: 40px 0;
  position: relative;
  padding-bottom: 15px;
}

.section-title h2 {
  color: var(--primary-color);
  font-size: 2rem;
  margin-bottom: 10px;
}

.section-title::after {
  content: '';
  position: absolute;
  bottom: 0;
  right: 50%;
  transform: translateX(50%);
  width: 80px;
  height: 3px;
  background-color: var(--secondary-color);
  border-radius: 3px;
}

/* الهيدر */
header {
  background-color: var(--white-color);
  box-shadow: var(--shadow-sm);
  padding: 15px 0;
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 1000;
  transition: var(--transition);
}

header .container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo h1 {
  color: var(--primary-color);
  font-size: 1.8rem;
  display: flex;
  align-items: center;
  gap: 10px;
}

.logo i {
  color: var(--secondary-color);
  font-size: 1.5rem;
}

/* القائمة */
nav ul {
  display: flex;
  list-style: none;
  gap: 25px;
}

nav ul li a {
  text-decoration: none;
  color: var(--primary-color);
  font-weight: 500;
  font-size: 1.1rem;
  transition: var(--transition);
  position: relative;
  padding: 5px 0;
}

nav ul li a:hover {
  color: var(--secondary-color);
}

nav ul li a::after {
  content: '';
  position: absolute;
  bottom: 0;
  right: 0;
  width: 0;
  height: 2px;
  background-color: var(--secondary-color);
  transition: var(--transition);
}

nav ul li a:hover::after {
  width: 100%;
}

/* قسم الهيرو */
.hero {
  background: linear-gradient(rgba(40, 71, 100, 0.85), rgba(40, 71, 100, 0.85)), 
              url("image/optiva.png") center/contain no-repeat;
  height: 450px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin-top: 78px;
  color: var(--white-color);
}

.hero-content {
  max-width: 800px;
  padding: 20px;
}

.hero-content h2 {
  font-size: 2.8rem;
  margin-bottom: 20px;
  line-height: 1.2;
}

.hero-content h2 span {
  color: var(--secondary-color);
}

.hero-content p {
  font-size: 1.3rem;
  margin-bottom: 30px;
}

/* قسم الأدوية */
.medicines {
  padding: 80px 0;
  background-color: var(--light-gray);
}

.medicines-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
  margin-top: 40px;
}

.medicine-card {
  background-color: var(--white-color);
  border-radius: 10px;
  overflow: hidden;
  box-shadow: var(--shadow-md);
  transition: var(--transition);
}

.medicine-card:hover {
  transform: translateY(-10px);
  box-shadow: var(--shadow-lg);
}

.medicine-card img {
  width: 100%;
  height: 220px;
  object-fit: cover;
}

.medicine-info {
  padding: 25px;
}

.medicine-info h3 {
  color: var(--primary-color);
  font-size: 1.5rem;
  margin-bottom: 15px;
}

.medicine-info p {
  color: var(--text-light);
  margin-bottom: 20px;
}

.medicine-details {
  display: flex;
  align-items: center;
  gap: 10px;
  color: var(--primary-color);
  margin-bottom: 20px;
}

.medicine-details i {
  color: var(--secondary-color);
  font-size: 1.2rem;
}

/* قسم الخدمات */
.services {
  padding: 80px 0;
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
  margin-top: 40px;
}

.service-card {
  background-color: var(--white-color);
  padding: 35px 30px;
  border-radius: 10px;
  text-align: center;
  box-shadow: var(--shadow-md);
  transition: var(--transition);
  border: 1px solid rgba(0, 0, 0, 0.05);
}

.service-card:hover {
  transform: translateY(-5px);
  box-shadow: var(--shadow-lg);
  background-color: var(--secondary-color);
  color: var(--white-color);
}

.service-card i {
  font-size: 3rem;
  color: var(--secondary-color);
  margin-bottom: 25px;
  transition: var(--transition);
}

.service-card:hover i {
  color: var(--white-color);
}

.service-card h3 {
  font-size: 1.4rem;
  margin-bottom: 15px;
  color: var(--primary-color);
  transition: var(--transition);
}

.service-card:hover h3 {
  color: var(--white-color);
}

/* قسم التواصل */
.contact {
  padding: 80px 0;
  background-color: var(--light-gray);
}

.contact-content {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 50px;
  margin-top: 40px;
}

.contact-info h3, 
.contact-form h3 {
  font-size: 1.6rem;
  margin-bottom: 25px;
  color: var(--primary-color);
}

.contact-item {
  display: flex;
  align-items: center;
  gap: 15px;
  margin-bottom: 20px;
}

.contact-item i {
  color: var(--secondary-color);
  font-size: 1.2rem;
  width: 25px;
}

.contact-form form {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.contact-form input,
.contact-form textarea {
  width: 100%;
  padding: 12px 15px;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 1rem;
  transition: var(--transition);
}

.contact-form input:focus,
.contact-form textarea:focus {
  border-color: var(--secondary-color);
  outline: none;
  box-shadow: 0 0 0 3px rgba(122, 194, 66, 0.2);
}

.contact-form textarea {
  height: 150px;
  resize: vertical;
}

/* الفوتر */
footer {
  background-color: var(--primary-color);
  color: var(--white-color);
  text-align: center;
  padding: 30px 0;
}

footer p {
  font-size: 1.1rem;
}

/* المودال */
.modal {
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  justify-content: center;
  align-items: center;
  z-index: 9999;
  backdrop-filter: blur(5px);
}

.modal-content {
  background-color: var(--white-color);
  border-radius: 10px;
  padding: 30px;
  max-width: 450px;
  width: 90%;
  box-shadow: var(--shadow-lg);
  position: relative;
  animation: modalFadeIn 0.3s ease;
}

@keyframes modalFadeIn {
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.close-modal {
  position: absolute;
  top: 15px;
  left: 15px;
  font-size: 1.5rem;
  color: var(--text-light);
  cursor: pointer;
  transition: var(--transition);
}

.close-modal:hover {
  color: var(--primary-color);
  transform: rotate(90deg);
}

.modal img {
  width: 100%;
  border-radius: 8px;
  margin-bottom: 20px;
  max-height: 200px;
  object-fit: cover;
}

.modal h3 {
  color: var(--primary-color);
  font-size: 1.5rem;
  margin-bottom: 15px;
  text-align: center;
}

.modal p {
  color: var(--text-light);
  margin-bottom: 20px;
  text-align: center;
}

.modal ul {
  list-style: none;
  margin-top: 20px;
}

.modal ul li {
  margin-bottom: 12px;
  display: flex;
  align-items: flex-start;
}

.modal ul li strong {
  color: var(--primary-color);
  min-width: 80px;
  display: inline-block;
}

/* التكيف مع الشاشات الصغيرة */
@media (max-width: 768px) {
  header .container {
    flex-direction: column;
    gap: 15px;
  }
  
  nav ul {
    flex-direction: column;
    align-items: center;
    gap: 10px;
  }
  
  .hero {
    height: 350px;
    margin-top: 120px;
  }
  
  .hero-content h2 {
    font-size: 2.2rem;
  }
  
  .hero-content p {
    font-size: 1.1rem;
  }
  
  .medicines-grid,
  .services-grid {
    grid-template-columns: 1fr;
  }
  
  .contact-content {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 480px) {
  .hero {
    height: 300px;
  }
  
  .hero-content h2 {
    font-size: 1.8rem;
  }
  
  .section-title h2 {
    font-size: 1.5rem;
  }
  
  .btn {
    padding: 10px 15px;
    font-size: 0.9rem;
  }
}