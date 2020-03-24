const location = {
    HOME: "home",
    BASE: "base",
    HOSPITAL: "hospital",
    ABOARD: "aboard"
};

module.exports = {
    soldiers: [{
        name: "Arthur Timothy Read",
        quarantine: false,
        location: location.HOME
    },
    {
        name: "Dora Winifred Read",
        quarantine: true,
        location: location.HOME
    },
    {
        name: "Buster Baxter",
        quarantine: false,
        location: location.HOSPITAL
    },
    {
        name: "Francine Alice Frensky",
        quarantine: true,
        location: location.HOSPITAL
    },
    {
        name: "Alan \"Brain\" Powers",
        quarantine: false,
        location: location.BASE
    },
    ]
};