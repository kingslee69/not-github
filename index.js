// the mobile-dropdown object
let dropdownHtml = {
  dropdown: false,
  dropdownElement: document.getElementById('dropdown'),
  openDropdown: function () {
    this.dropdownElement.classList.remove('disappear');
    this.dropdown = true;
  },
  closeDropdown: function () {
    this.dropdownElement.classList.add('disappear');
    this.dropdown = false;
  },
};

// the add-icon pop-up object
let addPopUpHtml = {
  addPopUp: false,
  addElement: document.getElementById('add-pop-up'),
  openAddPopUp: function () {
    this.addElement.classList.remove('pop-disappear');
    this.addPopUp = true;
    console.log('addPopUp open');
    console.log('addPopUp', this.addPopUp);
  },
  closeAddPopUp: function () {
    this.addElement.classList.add('pop-disappear');
    this.addPopUp = false;
    console.log('addPopUp close');
    console.log('addPopUp', this.addPopUp);
  },
};

// the profile-icon pop-up object
let profilePopUpHtml = {
  profilePopUp: false,
  profileElement: document.getElementById('profile-pop-up'),
  openProfilePopUp: function () {
    this.profileElement.classList.remove('pop-disappear');
    this.profilePopUp = true;
    console.log('open');
    console.log('profilePopUp', this.profilePopUp);
  },
  closeProfilePopUp: function () {
    this.profileElement.classList.add('pop-disappear');
    this.profilePopUp = false;
    console.log('close');
    console.log('profilePopUp', this.profilePopUp);
  },
};

function handleDropdown() {
  if (dropdownHtml.dropdown) {
    dropdownHtml.closeDropdown();
  } else {
    dropdownHtml.openDropdown();
  }
}

function handleAddPopUp() {
  if (!addPopUpHtml.addPopUp) {
    addPopUpHtml.openAddPopUp();
  } else {
    addPopUpHtml.closeAddPopUp();
  }
}

function handleProfilePopUp() {
  if (!profilePopUpHtml.profilePopUp) {
    profilePopUpHtml.openProfilePopUp();
  } else {
    profilePopUpHtml.closeProfilePopUp();
  }
}
