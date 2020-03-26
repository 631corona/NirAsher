const devStatus = {
    IN_PROGRESS: "in_progress",
    FAILED: "failed",
    SUCCESS: "success"
};

module.exports = {
    labs: [{
        id: "lab-id1",
        name: "Dvir",
        status: devStatus.FAILED,
        progress_percentile: 100
    },
    {
        id: "lab-id2",
        name: "Amit",
        status: devStatus.IN_PROGRESS,
        progress_percentile: 30
    },
    {
        id: "lab-id3",
        name: "Chen",
        status: devStatus.IN_PROGRESS,
        progress_percentile: 50
    },
    {
        id: "lab-id4",
        name: "Dan",
        status: devStatus.SUCCESS,
        progress_percentile: 100
    },
    {
        id: "lab-id5",
        name: "Liat",
        status: devStatus.FAILED,
        progress_percentile: 100
    },
    {
        id: "lab-id6",
        name: "Ofir",
        status: devStatus.IN_PROGRESS,
        progress_percentile: 30
    },
    {
        id: "lab-id7",
        name: "Roy",
        status: devStatus.IN_PROGRESS,
        progress_percentile: 50
    },
    {
        id: "lab-id8",
        name: "Adi",
        status: devStatus.SUCCESS,
        progress_percentile: 100
    }]
};