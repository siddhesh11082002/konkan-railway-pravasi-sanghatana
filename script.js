document.addEventListener('DOMContentLoaded', function() {
  const sections = document.querySelectorAll('.section-box');
  const buttons = document.querySelectorAll('.nav-button');
  const header = document.querySelector('header');

  // Initially show the home section
  sections[0].classList.remove('hidden');
  buttons[0].classList.add('bg-blue-700'); // Highlight the Home button initially

  // Background images array
  const bgImages = [
    './images/ban1.jpg',
    './images/ban3.jpg',
    './images/ban4.jpg'    
  ];

  let currentBgIndex = 0;
  const intervalTime = 5000; // Change background image every 5 seconds (5000 milliseconds)

  function changeBackground() {
    header.style.backgroundImage = `url('${bgImages[currentBgIndex]}')`;
    currentBgIndex = (currentBgIndex + 1) % bgImages.length;
  }

  // Change background initially
  changeBackground();

  // Automatically change background at intervals
  setInterval(changeBackground, intervalTime);

  // Event listener for button clicks
  buttons.forEach((button, index) => {
    button.addEventListener('click', function() {
      // Hide all sections
      sections.forEach(section => section.classList.add('hidden'));
      // Remove active class from all buttons
      buttons.forEach(btn => btn.classList.remove('bg-blue-700'));
      // Show the clicked section
      sections[index].classList.remove('hidden');
      // Add active class to the clicked button
      button.classList.toggle('bg-blue-700');
    });
  });
});




    document.getElementById('sendEmailBtn').addEventListener('click', function() {
        var recipients = "ashwini.vaishnav@gmail.com, moeitoffice@gmail.com, vsomannavijayanagara@gmail.com, ravneetbittu@gmail.com,connect@mygov.nic.in, ravindrachavan.mla@gmail.com, piyushgoyalofficial@gmail.com, narayan.rane@gov.in, narayanrane52@gmail.com, narayan.rane@sansad.nic.inspeakerrsn1@gmail.com,waikarravindra@gmail.com";
        var cc = "Cm@maharashtra.gov.in, cmpro@maharashtra.gov.in,dcm@maharashtra.gov.in, devendrafadnavis@yahoo.com, kesarkardeepak@gmail.com, udaysamant11@gmail.com ,niranjanvdavkhare@gmail.com, Cmd@krcl.co.in, gm@cr.railnet.gov.in, sm.haryan@krcl.co.in, secy.cmd@krcl.co.in, secgm@cr.railnet.gov.in , rrmrn@krcl.co.in, cpro@cr.railnet.gov.in, devendrafadnavis@yahoo.com, nnr23682@gmail.com, shekhargnikam@gmail.in, mla@rajupatilmns.com , rajan825@gmail.com, vnaik95@gmail.com";
        var subject = "Requesting prompt response and action on Sawantwadi Railway Terminus issues";
        var body = "To,\n\nHon. Shri Ashwini Vaishnav ji,\nCabinet Minister, Railways\nGovernment of India.\n\nHon. Shri V. Somanna ji\nMoS, Railways,\nGovernment of India.\n\nHon. Shri Ravneet Singh Bittu ji.\nMoS, Railways,\nGovernment of India.\n\nSubject: Requesting you to take prompt responses along with immediate action on the approved work of the Sawantwadi Railway Terminus (SWV), requirement of additional train halts and passengers Amenities.\n\nRespected Sir,\n\nI hereby citizen of Sawantwadi, Sindhudurg district would like to congratulate both of you for taking charges over the railway ministry respectively.\n\nI would like to seek your attention on the following recent proposals and multiple requests:\n\n1. Prolonged pending development work at the Sawantwadi railway terminus should be completed as soon as possible.\n\n2. Konkan Railway corporation needs to be merged into Indian Railways for better future aspects.\n\n3. Halts of the express trains were revoked due to ZBTT during the covid period should be reinstated on high priority.\n\n4. Please consider the high Passengers footfall at Sawantwadi station and provide halts to below trains at Sawantwadi Rd station.\n\ni) 12133/34 C.S.M.T. Mumbai - Mangalore Junction - C.S.M.T. Mumbai Express.\n\nii) 22229/30 C.S.M.T. Mumbai - Madgaon - C.S.M.T. Mumbai Vande Bharat Express.\n\niii) 22655/56 Ernakulam Junction - H. Nizamuddin - Ernakulam Junction Superfast Express. (Weekly).\n\niv) 22653/54 Trivandrum Central - H. Nizamuddin - Trivandrum Central Superfast Express. (Weekly).\n\nv) 01139/40 Nagpur - Madgaon Jn - Nagpur Special Express.\n\n6. PRS facility at Sawantwadi station is currently non operational after 2:00 P.M. Here we need a mandatory change of operational timings from 8:00 AM To 6:00 PM at least.\n\n7. Inclusion of Sawantwadi station in the Amrit Bharat Station Scheme along with One Station One Product scheme.\n\n8. Introduction of new daily train From Borivali station (Mumbai) to Sawantwadi (SWV). (Discussed in Mumbai along with Hon.MP Piyush ji Goyal)\n\nPlease note we attempted multiple times with the Konkan Railway Corporation via various contact mediums requesting to fulfill the studyful and basic demands to be accepted but unfortunately we didn't get proper response or I would rather say concrete action plan was not made to achieve the same.\n\nKonkan Railway Passengers Association Sawantwadi & Sindhudurg along with 23 NGO's of our district have expressed their support to this demand's. We as team request you to fulfill all the demands raised in this email and the earlier memorandum to be acted upon expeditiously.\n\nI would like to remind you about the symbolic hunger strike happened with the support of numerous citizens and multiple NGO's on 26th January 2024 was peaceful. Further there is high possibility of this protest getting stronger which might not be a good sign for us.\n\nScheduling a meeting at your office along with our Konkan railway passenger union would bring more light to resolve these problems.\n\nLooking forward to hearing more on this matter as soon as possible.\n\nThank you!\n\nYour Sincerely,\n\nPeople of Entire Konkan Region.";

        var emailLink = "mailto:" + recipients +
                        "?cc=" + cc +
                        "&bcc=" + bcc +
                        "&subject=" + encodeURIComponent(subject) +
                        "&body=" + encodeURIComponent(body);

        // temporary anchor element tayar kartoy
        var tempLink = document.createElement('a');
        tempLink.setAttribute('href', emailLink);

        // anchor element body shi qppend kartoy
        document.body.appendChild(tempLink);

      
        tempLink.click();

        // Clean up:
        document.body.removeChild(tempLink);
    });

