
$(document).ready(function () {
	// setup some page defaults:
	$("#lblYear").text((new Date()).getFullYear());
})
	
// images arrays
var imgRotation1 = [
	["Table layed out and ready for our first wine club evening.", "Photos/2016-06-18 Wine Club 01_Alex_Rotation/2016-06-18-Wine-Club-01_Alex_Rotation_01.jpg"],
	["Some delicious snacks to go with our wines.", "Photos/2016-06-18 Wine Club 01_Alex_Rotation/2016-06-18-Wine-Club-01_Alex_Rotation_02.jpg"],
	["Ready to begin scoring the wines.", "Photos/2016-06-18 Wine Club 01_Alex_Rotation/2016-06-18-Wine-Club-01_Alex_Rotation_03.jpg"],
	["The wines (and a bubbly champagne) we brought for our first wine club evening.", "Photos/2016-06-18 Wine Club 01_Alex_Rotation/2016-06-18-Wine-Club-01_Alex_Rotation_04.jpg"],
	["Average score: 68%", "Photos/2016-06-18 Wine Club 01_Alex_Rotation/2016-06-18-Wine-Club-01_Alex_Rotation_05.jpg"],
	["", "Photos/2016-06-18 Wine Club 01_Alex_Rotation/2016-06-18-Wine-Club-01_Alex_Rotation_06.jpg"],
	["Average score: 58%", "Photos/2016-06-18 Wine Club 01_Alex_Rotation/2016-06-18-Wine-Club-01_Alex_Rotation_07.jpg"],
	["", "Photos/2016-06-18 Wine Club 01_Alex_Rotation/2016-06-18-Wine-Club-01_Alex_Rotation_08.jpg"],
	["", "Photos/2016-06-18 Wine Club 01_Alex_Rotation/2016-06-18-Wine-Club-01_Alex_Rotation_09.jpg"],
	["Average score: 85%", "Photos/2016-06-18 Wine Club 01_Alex_Rotation/2016-06-18-Wine-Club-01_Alex_Rotation_10.jpg"],
	["", "Photos/2016-06-18 Wine Club 01_Alex_Rotation/2016-06-18-Wine-Club-01_Alex_Rotation_11.jpg"],
	["Our score sheets.", "Photos/2016-06-18 Wine Club 01_Alex_Rotation/2016-06-18-Wine-Club-01_Alex_Rotation_15.jpg"],
	["Wine and food all ready!", "Photos/2016-06-18 Wine Club 01_Alex_Rotation/2016-06-18-Wine-Club-01_Alex_Rotation_12.jpg"],
	["", "Photos/2016-06-18 Wine Club 01_Alex_Rotation/2016-06-18-Wine-Club-01_Alex_Rotation_13.jpg"],
	["", "Photos/2016-06-18 Wine Club 01_Alex_Rotation/2016-06-18-Wine-Club-01_Alex_Rotation_14.jpg"],
];
var imgRotation2 = [
	["", "Photos/2016-07-23 Wine Club 02_Bronwen_Rotation/2016-07-23-Wine-Club-02_Bronwen_Rotation_03.jpg"],
	["", "Photos/2016-07-23 Wine Club 02_Bronwen_Rotation/2016-07-23-Wine-Club-02_Bronwen_Rotation_04.jpg"],
	["", "Photos/2016-07-23 Wine Club 02_Bronwen_Rotation/2016-07-23-Wine-Club-02_Bronwen_Rotation_05.jpg"],
	["", "Photos/2016-07-23 Wine Club 02_Bronwen_Rotation/2016-07-23-Wine-Club-02_Bronwen_Rotation_06.jpg"],
	["", "Photos/2016-07-23 Wine Club 02_Bronwen_Rotation/2016-07-23-Wine-Club-02_Bronwen_Rotation_07.jpg"],
	["", "Photos/2016-07-23 Wine Club 02_Bronwen_Rotation/2016-07-23-Wine-Club-02_Bronwen_Rotation_08.jpg"],
	["", "Photos/2016-07-23 Wine Club 02_Bronwen_Rotation/2016-07-23-Wine-Club-02_Bronwen_Rotation_01.jpg"],
	["", "Photos/2016-07-23 Wine Club 02_Bronwen_Rotation/2016-07-23-Wine-Club-02_Bronwen_Rotation_02.jpg"],
];

var imgRotation3 = [
	["", "Photos/2016-08-26 Wine Club 03_Jaydon_Rotation/2016-08-26-Wine-Club-03_Jaydon_Rotation_01.jpg"],
	["", "Photos/2016-08-26 Wine Club 03_Jaydon_Rotation/2016-08-26-Wine-Club-03_Jaydon_Rotation_02.jpg"],
	["", "Photos/2016-08-26 Wine Club 03_Jaydon_Rotation/2016-08-26-Wine-Club-03_Jaydon_Rotation_03.jpg"],
	["", "Photos/2016-08-26 Wine Club 03_Jaydon_Rotation/2016-08-26-Wine-Club-03_Jaydon_Rotation_06.jpg"],
	["", "Photos/2016-08-26 Wine Club 03_Jaydon_Rotation/2016-08-26-Wine-Club-03_Jaydon_Rotation_07.jpg"],
	["", "Photos/2016-08-26 Wine Club 03_Jaydon_Rotation/2016-08-26-Wine-Club-03_Jaydon_Rotation_08.jpg"],
	["", "Photos/2016-08-26 Wine Club 03_Jaydon_Rotation/2016-08-26-Wine-Club-03_Jaydon_Rotation_09.jpg"],
	["", "Photos/2016-08-26 Wine Club 03_Jaydon_Rotation/2016-08-26-Wine-Club-03_Jaydon_Rotation_10.jpg"],	
	["", "Photos/2016-08-26 Wine Club 03_Jaydon_Rotation/2016-08-26-Wine-Club-03_Jaydon_Rotation_04.jpg"],
	["", "Photos/2016-08-26 Wine Club 03_Jaydon_Rotation/2016-08-26-Wine-Club-03_Jaydon_Rotation_05.jpg"],
];

var imgRotation4 = [
	["", "Photos/2016-09-24 Wine Club 04_Matt_Rotation/2016-09-24-Wine-Club-04_Matt_Rotation_15.jpg"],
	["", "Photos/2016-09-24 Wine Club 04_Matt_Rotation/2016-09-24-Wine-Club-04_Matt_Rotation_01.jpg"],
	["", "Photos/2016-09-24 Wine Club 04_Matt_Rotation/2016-09-24-Wine-Club-04_Matt_Rotation_02.jpg"],
	["", "Photos/2016-09-24 Wine Club 04_Matt_Rotation/2016-09-24-Wine-Club-04_Matt_Rotation_04.jpg"],
	["", "Photos/2016-09-24 Wine Club 04_Matt_Rotation/2016-09-24-Wine-Club-04_Matt_Rotation_03.jpg"],
	["", "Photos/2016-09-24 Wine Club 04_Matt_Rotation/2016-09-24-Wine-Club-04_Matt_Rotation_05.jpg"],
	["", "Photos/2016-09-24 Wine Club 04_Matt_Rotation/2016-09-24-Wine-Club-04_Matt_Rotation_06.jpg"],
	["", "Photos/2016-09-24 Wine Club 04_Matt_Rotation/2016-09-24-Wine-Club-04_Matt_Rotation_07.jpg"],
	["", "Photos/2016-09-24 Wine Club 04_Matt_Rotation/2016-09-24-Wine-Club-04_Matt_Rotation_08.jpg"],
	["", "Photos/2016-09-24 Wine Club 04_Matt_Rotation/2016-09-24-Wine-Club-04_Matt_Rotation_09.jpg"],
	["", "Photos/2016-09-24 Wine Club 04_Matt_Rotation/2016-09-24-Wine-Club-04_Matt_Rotation_10.jpg"],
	["", "Photos/2016-09-24 Wine Club 04_Matt_Rotation/2016-09-24-Wine-Club-04_Matt_Rotation_11.jpg"],
	["", "Photos/2016-09-24 Wine Club 04_Matt_Rotation/2016-09-24-Wine-Club-04_Matt_Rotation_12.jpg"],
	["", "Photos/2016-09-24 Wine Club 04_Matt_Rotation/2016-09-24-Wine-Club-04_Matt_Rotation_13.jpg"],
	["", "Photos/2016-09-24 Wine Club 04_Matt_Rotation/2016-09-24-Wine-Club-04_Matt_Rotation_14.jpg"],
];

var imgHalloween = [
	["", "Photos/2016-10-22 Wine Club 05_Jaydon_Halloween Theme/2016-10-22-Wine-Club-05_Jaydon_Halloween_03.jpg"],
	["", "Photos/2016-10-22 Wine Club 05_Jaydon_Halloween Theme/2016-10-22-Wine-Club-05_Jaydon_Halloween_04.jpg"],
	["", "Photos/2016-10-22 Wine Club 05_Jaydon_Halloween Theme/2016-10-22-Wine-Club-05_Jaydon_Halloween_05.jpg"],
	["", "Photos/2016-10-22 Wine Club 05_Jaydon_Halloween Theme/2016-10-22-Wine-Club-05_Jaydon_Halloween_06.jpg"],
	["", "Photos/2016-10-22 Wine Club 05_Jaydon_Halloween Theme/2016-10-22-Wine-Club-05_Jaydon_Halloween_07.jpg"],
	["", "Photos/2016-10-22 Wine Club 05_Jaydon_Halloween Theme/2016-10-22-Wine-Club-05_Jaydon_Halloween_08.jpg"],
	["", "Photos/2016-10-22 Wine Club 05_Jaydon_Halloween Theme/2016-10-22-Wine-Club-05_Jaydon_Halloween_09.jpg"],
	["", "Photos/2016-10-22 Wine Club 05_Jaydon_Halloween Theme/2016-10-22-Wine-Club-05_Jaydon_Halloween_10.jpg"],
	["", "Photos/2016-10-22 Wine Club 05_Jaydon_Halloween Theme/2016-10-22-Wine-Club-05_Jaydon_Halloween_11.jpg"],
	["", "Photos/2016-10-22 Wine Club 05_Jaydon_Halloween Theme/2016-10-22-Wine-Club-05_Jaydon_Halloween_12.jpg"],
	["", "Photos/2016-10-22 Wine Club 05_Jaydon_Halloween Theme/2016-10-22-Wine-Club-05_Jaydon_Halloween_13.jpg"],
	["", "Photos/2016-10-22 Wine Club 05_Jaydon_Halloween Theme/2016-10-22-Wine-Club-05_Jaydon_Halloween_14.jpg"],
	["", "Photos/2016-10-22 Wine Club 05_Jaydon_Halloween Theme/2016-10-22-Wine-Club-05_Jaydon_Halloween_15.jpg"],
	["", "Photos/2016-10-22 Wine Club 05_Jaydon_Halloween Theme/2016-10-22-Wine-Club-05_Jaydon_Halloween_16.jpg"],
	["", "Photos/2016-10-22 Wine Club 05_Jaydon_Halloween Theme/2016-10-22-Wine-Club-05_Jaydon_Halloween_17.jpg"],
	["", "Photos/2016-10-22 Wine Club 05_Jaydon_Halloween Theme/2016-10-22-Wine-Club-05_Jaydon_Halloween_18.jpg"],
	["", "Photos/2016-10-22 Wine Club 05_Jaydon_Halloween Theme/2016-10-22-Wine-Club-05_Jaydon_Halloween_01.jpg"],
	["", "Photos/2016-10-22 Wine Club 05_Jaydon_Halloween Theme/2016-10-22-Wine-Club-05_Jaydon_Halloween_02.jpg"],
];

var imgPre2015 = [
	["", "Photos/2016-11-25 Wine Club 06_Alex_Wines from 2014 or earlier/2016-11-25-Wine-Club-06_Alex_Pre-2015-Wines_01.jpg"],
	["", "Photos/2016-11-25 Wine Club 06_Alex_Wines from 2014 or earlier/2016-11-25-Wine-Club-06_Alex_Pre-2015-Wines_02.jpg"],
	["", "Photos/2016-11-25 Wine Club 06_Alex_Wines from 2014 or earlier/2016-11-25-Wine-Club-06_Alex_Pre-2015-Wines_03.jpg"],
	["", "Photos/2016-11-25 Wine Club 06_Alex_Wines from 2014 or earlier/2016-11-25-Wine-Club-06_Alex_Pre-2015-Wines_04.jpg"],
	["", "Photos/2016-11-25 Wine Club 06_Alex_Wines from 2014 or earlier/2016-11-25-Wine-Club-06_Alex_Pre-2015-Wines_05.jpg"],
	["", "Photos/2016-11-25 Wine Club 06_Alex_Wines from 2014 or earlier/2016-11-25-Wine-Club-06_Alex_Pre-2015-Wines_06.jpg"],
	["", "Photos/2016-11-25 Wine Club 06_Alex_Wines from 2014 or earlier/2016-11-25-Wine-Club-06_Alex_Pre-2015-Wines_07.jpg"],
	["", "Photos/2016-11-25 Wine Club 06_Alex_Wines from 2014 or earlier/2016-11-25-Wine-Club-06_Alex_Pre-2015-Wines_08.jpg"],
	["", "Photos/2016-11-25 Wine Club 06_Alex_Wines from 2014 or earlier/2016-11-25-Wine-Club-06_Alex_Pre-2015-Wines_09.jpg"],
	["", "Photos/2016-11-25 Wine Club 06_Alex_Wines from 2014 or earlier/2016-11-25-Wine-Club-06_Alex_Pre-2015-Wines_10.jpg"],
	["", "Photos/2016-11-25 Wine Club 06_Alex_Wines from 2014 or earlier/2016-11-25-Wine-Club-06_Alex_Pre-2015-Wines_11.jpg"],
	["", "Photos/2016-11-25 Wine Club 06_Alex_Wines from 2014 or earlier/2016-11-25-Wine-Club-06_Alex_Pre-2015-Wines_12.jpg"],
	["", "Photos/2016-11-25 Wine Club 06_Alex_Wines from 2014 or earlier/2016-11-25-Wine-Club-06_Alex_Pre-2015-Wines_13.jpg"],
	["", "Photos/2016-11-25 Wine Club 06_Alex_Wines from 2014 or earlier/2016-11-25-Wine-Club-06_Alex_Pre-2015-Wines_14.jpg"],
];

var imgNewYears = [
	["", "Photos/2016-12-31 Wine Club 07_Jaydon's Aunt_New Years Summer Theme/2016-12-31-Wine-Club-07_Jaydon's-Aunt_Summer-Theme_03.jpg"],
	["", "Photos/2016-12-31 Wine Club 07_Jaydon's Aunt_New Years Summer Theme/2016-12-31-Wine-Club-07_Jaydon's-Aunt_Summer-Theme_04.jpg"],
	["", "Photos/2016-12-31 Wine Club 07_Jaydon's Aunt_New Years Summer Theme/2016-12-31-Wine-Club-07_Jaydon's-Aunt_Summer-Theme_05.jpg"],
	["", "Photos/2016-12-31 Wine Club 07_Jaydon's Aunt_New Years Summer Theme/2016-12-31-Wine-Club-07_Jaydon's-Aunt_Summer-Theme_06.jpg"],
	["", "Photos/2016-12-31 Wine Club 07_Jaydon's Aunt_New Years Summer Theme/2016-12-31-Wine-Club-07_Jaydon's-Aunt_Summer-Theme_07.jpg"],
	["", "Photos/2016-12-31 Wine Club 07_Jaydon's Aunt_New Years Summer Theme/2016-12-31-Wine-Club-07_Jaydon's-Aunt_Summer-Theme_08.jpg"],
	["", "Photos/2016-12-31 Wine Club 07_Jaydon's Aunt_New Years Summer Theme/2016-12-31-Wine-Club-07_Jaydon's-Aunt_Summer-Theme_09.jpg"],
	["", "Photos/2016-12-31 Wine Club 07_Jaydon's Aunt_New Years Summer Theme/2016-12-31-Wine-Club-07_Jaydon's-Aunt_Summer-Theme_10.jpg"],
	["", "Photos/2016-12-31 Wine Club 07_Jaydon's Aunt_New Years Summer Theme/2016-12-31-Wine-Club-07_Jaydon's-Aunt_Summer-Theme_11.jpg"],
	["", "Photos/2016-12-31 Wine Club 07_Jaydon's Aunt_New Years Summer Theme/2016-12-31-Wine-Club-07_Jaydon's-Aunt_Summer-Theme_12.jpg"],
	["", "Photos/2016-12-31 Wine Club 07_Jaydon's Aunt_New Years Summer Theme/2016-12-31-Wine-Club-07_Jaydon's-Aunt_Summer-Theme_01.jpg"],
	["", "Photos/2016-12-31 Wine Club 07_Jaydon's Aunt_New Years Summer Theme/2016-12-31-Wine-Club-07_Jaydon's-Aunt_Summer-Theme_02.jpg"],
];

var imgValentines = [
	["", "Photos/2017-02-18-Wine-Club-08_Bronwen_Valentines-Rose/2017-02-18-Wine-Club-08_Bronwen_Valentines-Rose_01.jpg"],
	["", "Photos/2017-02-18-Wine-Club-08_Bronwen_Valentines-Rose/2017-02-18-Wine-Club-08_Bronwen_Valentines-Rose_02.jpg"],
	["", "Photos/2017-02-18-Wine-Club-08_Bronwen_Valentines-Rose/2017-02-18-Wine-Club-08_Bronwen_Valentines-Rose_03.jpg"],
	["", "Photos/2017-02-18-Wine-Club-08_Bronwen_Valentines-Rose/2017-02-18-Wine-Club-08_Bronwen_Valentines-Rose_05.jpg"],
	["", "Photos/2017-02-18-Wine-Club-08_Bronwen_Valentines-Rose/2017-02-18-Wine-Club-08_Bronwen_Valentines-Rose_06.jpg"],
	["", "Photos/2017-02-18-Wine-Club-08_Bronwen_Valentines-Rose/2017-02-18-Wine-Club-08_Bronwen_Valentines-Rose_07.jpg"],
	["", "Photos/2017-02-18-Wine-Club-08_Bronwen_Valentines-Rose/2017-02-18-Wine-Club-08_Bronwen_Valentines-Rose_08.jpg"],
	["", "Photos/2017-02-18-Wine-Club-08_Bronwen_Valentines-Rose/2017-02-18-Wine-Club-08_Bronwen_Valentines-Rose_09.jpg"],
	["", "Photos/2017-02-18-Wine-Club-08_Bronwen_Valentines-Rose/2017-02-18-Wine-Club-08_Bronwen_Valentines-Rose_10.jpg"],
	["", "Photos/2017-02-18-Wine-Club-08_Bronwen_Valentines-Rose/2017-02-18-Wine-Club-08_Bronwen_Valentines-Rose_13.jpg"],
	["", "Photos/2017-02-18-Wine-Club-08_Bronwen_Valentines-Rose/2017-02-18-Wine-Club-08_Bronwen_Valentines-Rose_04.jpg"],
	["", "Photos/2017-02-18-Wine-Club-08_Bronwen_Valentines-Rose/2017-02-18-Wine-Club-08_Bronwen_Valentines-Rose_11.jpg"],
	["", "Photos/2017-02-18-Wine-Club-08_Bronwen_Valentines-Rose/2017-02-18-Wine-Club-08_Bronwen_Valentines-Rose_12.jpg"],
];

var imgGIFWines = [
	["", "Photos/2017-03-25-Wine-Club-09_Matt_White Wine (GIF Night)/2017-03-25-Wine-Club-09_Matt_White Wine (GIF Night)_01.jpg"],
	["", "Photos/2017-03-25-Wine-Club-09_Matt_White Wine (GIF Night)/2017-03-25-Wine-Club-09_Matt_White Wine (GIF Night)_02.jpg"],
	["", "Photos/2017-03-25-Wine-Club-09_Matt_White Wine (GIF Night)/2017-03-25-Wine-Club-09_Matt_White Wine (GIF Night)_03.jpg"],
	["", "Photos/2017-03-25-Wine-Club-09_Matt_White Wine (GIF Night)/2017-03-25-Wine-Club-09_Matt_White Wine (GIF Night)_04.jpg"],
	["", "Photos/2017-03-25-Wine-Club-09_Matt_White Wine (GIF Night)/2017-03-25-Wine-Club-09_Matt_White Wine (GIF Night)_07.jpg"],
	["", "Photos/2017-03-25-Wine-Club-09_Matt_White Wine (GIF Night)/2017-03-25-Wine-Club-09_Matt_White Wine (GIF Night)_08.jpg"],
	["", "Photos/2017-03-25-Wine-Club-09_Matt_White Wine (GIF Night)/2017-03-25-Wine-Club-09_Matt_White Wine (GIF Night)_09.jpg"],
	["", "Photos/2017-03-25-Wine-Club-09_Matt_White Wine (GIF Night)/2017-03-25-Wine-Club-09_Matt_White Wine (GIF Night)_10.jpg"],
	["", "Photos/2017-03-25-Wine-Club-09_Matt_White Wine (GIF Night)/2017-03-25-Wine-Club-09_Matt_White Wine (GIF Night)_11.jpg"],
	["", "Photos/2017-03-25-Wine-Club-09_Matt_White Wine (GIF Night)/2017-03-25-Wine-Club-09_Matt_White Wine (GIF Night)_12.jpg"],
	["", "Photos/2017-03-25-Wine-Club-09_Matt_White Wine (GIF Night)/2017-03-25-Wine-Club-09_Matt_White Wine (GIF Night)_13.jpg"],
	["", "Photos/2017-03-25-Wine-Club-09_Matt_White Wine (GIF Night)/2017-03-25-Wine-Club-09_Matt_White Wine (GIF Night)_14.jpg"],
	["", "Photos/2017-03-25-Wine-Club-09_Matt_White Wine (GIF Night)/2017-03-25-Wine-Club-09_Matt_White Wine (GIF Night)_15.jpg"],
	["", "Photos/2017-03-25-Wine-Club-09_Matt_White Wine (GIF Night)/2017-03-25-Wine-Club-09_Matt_White Wine (GIF Night)_16.jpg"],
	["", "Photos/2017-03-25-Wine-Club-09_Matt_White Wine (GIF Night)/2017-03-25-Wine-Club-09_Matt_White Wine (GIF Night)_18.jpg"],
	["", "Photos/2017-03-25-Wine-Club-09_Matt_White Wine (GIF Night)/2017-03-25-Wine-Club-09_Matt_White Wine (GIF Night)_19.jpg"],
	["", "Photos/2017-03-25-Wine-Club-09_Matt_White Wine (GIF Night)/2017-03-25-Wine-Club-09_Matt_White Wine (GIF Night)_05.jpg"],
	["", "Photos/2017-03-25-Wine-Club-09_Matt_White Wine (GIF Night)/2017-03-25-Wine-Club-09_Matt_White Wine (GIF Night)_06.jpg"],
	["", "Photos/2017-03-25-Wine-Club-09_Matt_White Wine (GIF Night)/2017-03-25-Wine-Club-09_Matt_White Wine (GIF Night)_17.jpg"],
];

var imgCheapWine = [
	["", "Photos/2017-05-13-Wine-Club-10_Alex_Cheap-Wine/2017-05-13-Wine-Club-10_Alex_Cheap-Wine_01.jpg"],
	["", "Photos/2017-05-13-Wine-Club-10_Alex_Cheap-Wine/2017-05-13-Wine-Club-10_Alex_Cheap-Wine_02.jpg"],
	["", "Photos/2017-05-13-Wine-Club-10_Alex_Cheap-Wine/2017-05-13-Wine-Club-10_Alex_Cheap-Wine_03.jpg"],
	["", "Photos/2017-05-13-Wine-Club-10_Alex_Cheap-Wine/2017-05-13-Wine-Club-10_Alex_Cheap-Wine_04.jpg"],
	["", "Photos/2017-05-13-Wine-Club-10_Alex_Cheap-Wine/2017-05-13-Wine-Club-10_Alex_Cheap-Wine_05.jpg"],
	["", "Photos/2017-05-13-Wine-Club-10_Alex_Cheap-Wine/2017-05-13-Wine-Club-10_Alex_Cheap-Wine_06.jpg"],
	["", "Photos/2017-05-13-Wine-Club-10_Alex_Cheap-Wine/2017-05-13-Wine-Club-10_Alex_Cheap-Wine_07.jpg"],
	["", "Photos/2017-05-13-Wine-Club-10_Alex_Cheap-Wine/2017-05-13-Wine-Club-10_Alex_Cheap-Wine_08.jpg"],
	["", "Photos/2017-05-13-Wine-Club-10_Alex_Cheap-Wine/2017-05-13-Wine-Club-10_Alex_Cheap-Wine_09.jpg"],
	["", "Photos/2017-05-13-Wine-Club-10_Alex_Cheap-Wine/2017-05-13-Wine-Club-10_Alex_Cheap-Wine_10.jpg"],
];

var imgCelebrations = [
	['Celebrations','Photos/2017-06-23 Wine-Club 11_Jaydon_Celebrations/2017-06-23-Wine-Club-11_Jaydon_Celebrations_01.jpg'],
	['Celebrations','Photos/2017-06-23 Wine-Club 11_Jaydon_Celebrations/2017-06-23-Wine-Club-11_Jaydon_Celebrations_03.jpg'],
	['Celebrations','Photos/2017-06-23 Wine-Club 11_Jaydon_Celebrations/2017-06-23-Wine-Club-11_Jaydon_Celebrations_04.jpg'],
	['Celebrations','Photos/2017-06-23 Wine-Club 11_Jaydon_Celebrations/2017-06-23-Wine-Club-11_Jaydon_Celebrations_05.jpg'],
	['Celebrations','Photos/2017-06-23 Wine-Club 11_Jaydon_Celebrations/2017-06-23-Wine-Club-11_Jaydon_Celebrations_06.jpg'],
	['Celebrations','Photos/2017-06-23 Wine-Club 11_Jaydon_Celebrations/2017-06-23-Wine-Club-11_Jaydon_Celebrations_07.jpg'],
	['Celebrations','Photos/2017-06-23 Wine-Club 11_Jaydon_Celebrations/2017-06-23-Wine-Club-11_Jaydon_Celebrations_08.jpg'],
	['Celebrations','Photos/2017-06-23 Wine-Club 11_Jaydon_Celebrations/2017-06-23-Wine-Club-11_Jaydon_Celebrations_09.jpg'],
	['Celebrations','Photos/2017-06-23 Wine-Club 11_Jaydon_Celebrations/2017-06-23-Wine-Club-11_Jaydon_Celebrations_10.jpg'],
	['Celebrations','Photos/2017-06-23 Wine-Club 11_Jaydon_Celebrations/2017-06-23-Wine-Club-11_Jaydon_Celebrations_11.jpg'],
	['Celebrations','Photos/2017-06-23 Wine-Club 11_Jaydon_Celebrations/2017-06-23-Wine-Club-11_Jaydon_Celebrations_22.jpg'],
	['Celebrations','Photos/2017-06-23 Wine-Club 11_Jaydon_Celebrations/2017-06-23-Wine-Club-11_Jaydon_Celebrations_23.jpg'],
	['Celebrations','Photos/2017-06-23 Wine-Club 11_Jaydon_Celebrations/2017-06-23-Wine-Club-11_Jaydon_Celebrations_12.jpg'],
	['Celebrations','Photos/2017-06-23 Wine-Club 11_Jaydon_Celebrations/2017-06-23-Wine-Club-11_Jaydon_Celebrations_13.jpg'],
	['Celebrations','Photos/2017-06-23 Wine-Club 11_Jaydon_Celebrations/2017-06-23-Wine-Club-11_Jaydon_Celebrations_14.jpg'],
	['Celebrations','Photos/2017-06-23 Wine-Club 11_Jaydon_Celebrations/2017-06-23-Wine-Club-11_Jaydon_Celebrations_16.jpg'],
	['Celebrations','Photos/2017-06-23 Wine-Club 11_Jaydon_Celebrations/2017-06-23-Wine-Club-11_Jaydon_Celebrations_20.jpg'],
	['Celebrations','Photos/2017-06-23 Wine-Club 11_Jaydon_Celebrations/2017-06-23-Wine-Club-11_Jaydon_Celebrations_15.jpg'],
	['Celebrations','Photos/2017-06-23 Wine-Club 11_Jaydon_Celebrations/2017-06-23-Wine-Club-11_Jaydon_Celebrations_18.jpg'],
	['Celebrations','Photos/2017-06-23 Wine-Club 11_Jaydon_Celebrations/2017-06-23-Wine-Club-11_Jaydon_Celebrations_26.jpg'],
	
	
	['Celebrations','Photos/2017-06-23 Wine-Club 11_Jaydon_Celebrations/2017-06-23-Wine-Club-11_Jaydon_Celebrations_17.jpg'],
	['Celebrations','Photos/2017-06-23 Wine-Club 11_Jaydon_Celebrations/2017-06-23-Wine-Club-11_Jaydon_Celebrations_21.jpg'],
	['Celebrations','Photos/2017-06-23 Wine-Club 11_Jaydon_Celebrations/2017-06-23-Wine-Club-11_Jaydon_Celebrations_24.jpg'],
	['Celebrations','Photos/2017-06-23 Wine-Club 11_Jaydon_Celebrations/2017-06-23-Wine-Club-11_Jaydon_Celebrations_25.jpg'],
	['Celebrations','Photos/2017-06-23 Wine-Club 11_Jaydon_Celebrations/2017-06-23-Wine-Club-11_Jaydon_Celebrations_27.jpg'],
	['Celebrations','Photos/2017-06-23 Wine-Club 11_Jaydon_Celebrations/2017-06-23-Wine-Club-11_Jaydon_Celebrations_29.jpg'],
	['Celebrations','Photos/2017-06-23 Wine-Club 11_Jaydon_Celebrations/2017-06-23-Wine-Club-11_Jaydon_Celebrations_32.jpg'],
	['Celebrations','Photos/2017-06-23 Wine-Club 11_Jaydon_Celebrations/2017-06-23-Wine-Club-11_Jaydon_Celebrations_34.jpg'],
	['Celebrations','Photos/2017-06-23 Wine-Club 11_Jaydon_Celebrations/2017-06-23-Wine-Club-11_Jaydon_Celebrations_02.jpg'],
	['Celebrations','Photos/2017-06-23 Wine-Club 11_Jaydon_Celebrations/2017-06-23-Wine-Club-11_Jaydon_Celebrations_31.jpg'],
];

var imgRedWines = [
	['Red Wines','Photos/2017-07-15 Wine-Club 12_Matt_Red Wine Night/2017-06-23 Wine Club 11_Jaydon_Red Wine Night_01.jpg'],
	['Red Wines','Photos/2017-07-15 Wine-Club 12_Matt_Red Wine Night/2017-06-23 Wine Club 11_Jaydon_Red Wine Night_02.jpg'],
	['Red Wines','Photos/2017-07-15 Wine-Club 12_Matt_Red Wine Night/2017-06-23 Wine Club 11_Jaydon_Red Wine Night_03.jpg'],
	['Red Wines','Photos/2017-07-15 Wine-Club 12_Matt_Red Wine Night/2017-06-23 Wine Club 11_Jaydon_Red Wine Night_04.jpg'],
	['Red Wines','Photos/2017-07-15 Wine-Club 12_Matt_Red Wine Night/2017-06-23 Wine Club 11_Jaydon_Red Wine Night_05.jpg'],
	['Red Wines','Photos/2017-07-15 Wine-Club 12_Matt_Red Wine Night/2017-06-23 Wine Club 11_Jaydon_Red Wine Night_06.jpg'],
	['Red Wines','Photos/2017-07-15 Wine-Club 12_Matt_Red Wine Night/2017-06-23 Wine Club 11_Jaydon_Red Wine Night_07.jpg'],
	['Red Wines','Photos/2017-07-15 Wine-Club 12_Matt_Red Wine Night/2017-06-23 Wine Club 11_Jaydon_Red Wine Night_08.jpg'],
	['Red Wines','Photos/2017-07-15 Wine-Club 12_Matt_Red Wine Night/2017-06-23 Wine Club 11_Jaydon_Red Wine Night_09.jpg'],
	['Red Wines','Photos/2017-07-15 Wine-Club 12_Matt_Red Wine Night/2017-06-23 Wine Club 11_Jaydon_Red Wine Night_15.jpg'],
	['Red Wines','Photos/2017-07-15 Wine-Club 12_Matt_Red Wine Night/2017-06-23 Wine Club 11_Jaydon_Red Wine Night_10.jpg'],
	['Red Wines','Photos/2017-07-15 Wine-Club 12_Matt_Red Wine Night/2017-06-23 Wine Club 11_Jaydon_Red Wine Night_11.jpg'],
	['Red Wines','Photos/2017-07-15 Wine-Club 12_Matt_Red Wine Night/2017-06-23 Wine Club 11_Jaydon_Red Wine Night_12.jpg'],
	['Red Wines','Photos/2017-07-15 Wine-Club 12_Matt_Red Wine Night/2017-06-23 Wine Club 11_Jaydon_Red Wine Night_13.jpg'],
];

var imgMysteryNight = [
	['Mystery Wine Night','Photos/2017-08-12 Wine-Club 13_Bronwen_Mystery Wines/2017-08-12 Wine-Club 13_Bronwen_Mystery Wines_01.jpg'],
	['Mystery Wine Night','Photos/2017-08-12 Wine-Club 13_Bronwen_Mystery Wines/2017-08-12 Wine-Club 13_Bronwen_Mystery Wines_16.jpg'],
	// ['Mystery Wine Night','Photos/2017-08-12 Wine-Club 13_Bronwen_Mystery Wines/2017-08-12 Wine-Club 13_Bronwen_Mystery Wines_02.jpg'],
	['Mystery Wine Night','Photos/2017-08-12 Wine-Club 13_Bronwen_Mystery Wines/2017-08-12 Wine-Club 13_Bronwen_Mystery Wines_03.jpg'],
	['Mystery Wine Night','Photos/2017-08-12 Wine-Club 13_Bronwen_Mystery Wines/2017-08-12 Wine-Club 13_Bronwen_Mystery Wines_04.jpg'],
	['Mystery Wine Night','Photos/2017-08-12 Wine-Club 13_Bronwen_Mystery Wines/2017-08-12 Wine-Club 13_Bronwen_Mystery Wines_05.jpg'],
	['Mystery Wine Night','Photos/2017-08-12 Wine-Club 13_Bronwen_Mystery Wines/2017-08-12 Wine-Club 13_Bronwen_Mystery Wines_06.jpg'],
	['Mystery Wine Night','Photos/2017-08-12 Wine-Club 13_Bronwen_Mystery Wines/2017-08-12 Wine-Club 13_Bronwen_Mystery Wines_07.jpg'],
	['Mystery Wine Night','Photos/2017-08-12 Wine-Club 13_Bronwen_Mystery Wines/2017-08-12 Wine-Club 13_Bronwen_Mystery Wines_08.jpg'],
	['Mystery Wine Night','Photos/2017-08-12 Wine-Club 13_Bronwen_Mystery Wines/2017-08-12 Wine-Club 13_Bronwen_Mystery Wines_09.jpg'],
	['Mystery Wine Night','Photos/2017-08-12 Wine-Club 13_Bronwen_Mystery Wines/2017-08-12 Wine-Club 13_Bronwen_Mystery Wines_10.jpg'],
	['Mystery Wine Night','Photos/2017-08-12 Wine-Club 13_Bronwen_Mystery Wines/2017-08-12 Wine-Club 13_Bronwen_Mystery Wines_11.jpg'],
	['Mystery Wine Night','Photos/2017-08-12 Wine-Club 13_Bronwen_Mystery Wines/2017-08-12 Wine-Club 13_Bronwen_Mystery Wines_12.jpg'],
	['Mystery Wine Night','Photos/2017-08-12 Wine-Club 13_Bronwen_Mystery Wines/2017-08-12 Wine-Club 13_Bronwen_Mystery Wines_13.jpg'],
	['Mystery Wine Night','Photos/2017-08-12 Wine-Club 13_Bronwen_Mystery Wines/2017-08-12 Wine-Club 13_Bronwen_Mystery Wines_14.jpg'],
	['Mystery Wine Night','Photos/2017-08-12 Wine-Club 13_Bronwen_Mystery Wines/2017-08-12 Wine-Club 13_Bronwen_Mystery Wines_15.jpg'],
	['Mystery Wine Night','Photos/2017-08-12 Wine-Club 13_Bronwen_Mystery Wines/2017-08-12 Wine-Club 13_Bronwen_Mystery Wines_17.jpg'],
	['Mystery Wine Night','Photos/2017-08-12 Wine-Club 13_Bronwen_Mystery Wines/2017-08-12 Wine-Club 13_Bronwen_Mystery Wines_18.jpg'],
	['Mystery Wine Night','Photos/2017-08-12 Wine-Club 13_Bronwen_Mystery Wines/2017-08-12 Wine-Club 13_Bronwen_Mystery Wines_19.jpg'],
	['Mystery Wine Night','Photos/2017-08-12 Wine-Club 13_Bronwen_Mystery Wines/2017-08-12 Wine-Club 13_Bronwen_Mystery Wines_20.jpg'],
	['Mystery Wine Night','Photos/2017-08-12 Wine-Club 13_Bronwen_Mystery Wines/2017-08-12 Wine-Club 13_Bronwen_Mystery Wines_21.jpg'],
	['Mystery Wine Night','Photos/2017-08-12 Wine-Club 13_Bronwen_Mystery Wines/2017-08-12 Wine-Club 13_Bronwen_Mystery Wines_22.jpg'],
];

var imgPizzaEvening = [
	['Pizza Evening','Photos/2017-09-16 Wine-Club 14 Matt_Pizza Night/2017-09-16 Wine-Club 14 Matt_Pizza Night_01.jpg'],
	['Pizza Evening','Photos/2017-09-16 Wine-Club 14 Matt_Pizza Night/2017-09-16 Wine-Club 14 Matt_Pizza Night_03.jpg'],
	['Pizza Evening','Photos/2017-09-16 Wine-Club 14 Matt_Pizza Night/2017-09-16 Wine-Club 14 Matt_Pizza Night_04.jpg'],
	['Pizza Evening','Photos/2017-09-16 Wine-Club 14 Matt_Pizza Night/2017-09-16 Wine-Club 14 Matt_Pizza Night_05.jpg'],
	['Pizza Evening','Photos/2017-09-16 Wine-Club 14 Matt_Pizza Night/2017-09-16 Wine-Club 14 Matt_Pizza Night_02.jpg'],
	['Pizza Evening','Photos/2017-09-16 Wine-Club 14 Matt_Pizza Night/2017-09-16 Wine-Club 14 Matt_Pizza Night_06.jpg'],
	['Pizza Evening','Photos/2017-09-16 Wine-Club 14 Matt_Pizza Night/2017-09-16 Wine-Club 14 Matt_Pizza Night_07.jpg'],
	['Pizza Evening','Photos/2017-09-16 Wine-Club 14 Matt_Pizza Night/2017-09-16 Wine-Club 14 Matt_Pizza Night_08.jpg'],
	['Pizza Evening','Photos/2017-09-16 Wine-Club 14 Matt_Pizza Night/2017-09-16 Wine-Club 14 Matt_Pizza Night_09.jpg'],
	['Pizza Evening','Photos/2017-09-16 Wine-Club 14 Matt_Pizza Night/2017-09-16 Wine-Club 14 Matt_Pizza Night_10.jpg'],
	['Pizza Evening','Photos/2017-09-16 Wine-Club 14 Matt_Pizza Night/2017-09-16 Wine-Club 14 Matt_Pizza Night_11.jpg'],
	['Pizza Evening','Photos/2017-09-16 Wine-Club 14 Matt_Pizza Night/2017-09-16 Wine-Club 14 Matt_Pizza Night_12.jpg'],
	['Pizza Evening','Photos/2017-09-16 Wine-Club 14 Matt_Pizza Night/2017-09-16 Wine-Club 14 Matt_Pizza Night_13.jpg'],
	['Pizza Evening','Photos/2017-09-16 Wine-Club 14 Matt_Pizza Night/2017-09-16 Wine-Club 14 Matt_Pizza Night_14.jpg'],
	['Pizza Evening','Photos/2017-09-16 Wine-Club 14 Matt_Pizza Night/2017-09-16 Wine-Club 14 Matt_Pizza Night_15.jpg'],
	['Pizza Evening','Photos/2017-09-16 Wine-Club 14 Matt_Pizza Night/2017-09-16 Wine-Club 14 Matt_Pizza Night_16.jpg'],
];

var imgOddBins = [
	// ['Odd Bins','Photos/2017-10-14 Wine-Club 15 Alex_Odd Bins/2017-10-14 Wine-Club 15 Alex_Odd Bins_01.jpg'],
	['Odd Bins','Photos/2017-10-14 Wine-Club 15 Alex_Odd Bins/2017-10-14 Wine-Club 15 Alex_Odd Bins_02.jpg'],
	['Odd Bins','Photos/2017-10-14 Wine-Club 15 Alex_Odd Bins/2017-10-14 Wine-Club 15 Alex_Odd Bins_03.jpg'],
	['Odd Bins','Photos/2017-10-14 Wine-Club 15 Alex_Odd Bins/2017-10-14 Wine-Club 15 Alex_Odd Bins_04.jpg'],
	// ['Odd Bins','Photos/2017-10-14 Wine-Club 15 Alex_Odd Bins/2017-10-14 Wine-Club 15 Alex_Odd Bins_05.jpg'],
	// ['Odd Bins','Photos/2017-10-14 Wine-Club 15 Alex_Odd Bins/2017-10-14 Wine-Club 15 Alex_Odd Bins_06.jpg'],
	['Odd Bins','Photos/2017-10-14 Wine-Club 15 Alex_Odd Bins/2017-10-14 Wine-Club 15 Alex_Odd Bins_07.jpg'],
	['Odd Bins','Photos/2017-10-14 Wine-Club 15 Alex_Odd Bins/2017-10-14 Wine-Club 15 Alex_Odd Bins_08.jpg'],
	['Odd Bins','Photos/2017-10-14 Wine-Club 15 Alex_Odd Bins/2017-10-14 Wine-Club 15 Alex_Odd Bins_09.jpg'],
	['Odd Bins','Photos/2017-10-14 Wine-Club 15 Alex_Odd Bins/2017-10-14 Wine-Club 15 Alex_Odd Bins_10.jpg'],
	['Odd Bins','Photos/2017-10-14 Wine-Club 15 Alex_Odd Bins/2017-10-14 Wine-Club 15 Alex_Odd Bins_11.jpg'],
	['Odd Bins','Photos/2017-10-14 Wine-Club 15 Alex_Odd Bins/2017-10-14 Wine-Club 15 Alex_Odd Bins_12.jpg'],
	['Odd Bins','Photos/2017-10-14 Wine-Club 15 Alex_Odd Bins/2017-10-14 Wine-Club 15 Alex_Odd Bins_13.jpg'],
	['Odd Bins','Photos/2017-10-14 Wine-Club 15 Alex_Odd Bins/2017-10-14 Wine-Club 15 Alex_Odd Bins_14.jpg'],
	// ['Odd Bins','Photos/2017-10-14 Wine-Club 15 Alex_Odd Bins/2017-10-14 Wine-Club 15 Alex_Odd Bins_15.jpg'],
];

var imgInternational = [
	['International Wines','Photos/2017-11-17 Wine-Club 16 Jaydon_International/2017-11-17 Wine-Club 16 Jaydon_International_21.jpg'],
	['International Wines','Photos/2017-11-17 Wine-Club 16 Jaydon_International/2017-11-17 Wine-Club 16 Jaydon_International_24.jpg'],
	['International Wines','Photos/2017-11-17 Wine-Club 16 Jaydon_International/2017-11-17 Wine-Club 16 Jaydon_International_02.jpg'],
	['International Wines','Photos/2017-11-17 Wine-Club 16 Jaydon_International/2017-11-17 Wine-Club 16 Jaydon_International_03.jpg'],
	['International Wines','Photos/2017-11-17 Wine-Club 16 Jaydon_International/2017-11-17 Wine-Club 16 Jaydon_International_04.jpg'],
	['International Wines','Photos/2017-11-17 Wine-Club 16 Jaydon_International/2017-11-17 Wine-Club 16 Jaydon_International_05.jpg'],
	['International Wines','Photos/2017-11-17 Wine-Club 16 Jaydon_International/2017-11-17 Wine-Club 16 Jaydon_International_06.jpg'],
	['International Wines','Photos/2017-11-17 Wine-Club 16 Jaydon_International/2017-11-17 Wine-Club 16 Jaydon_International_07.jpg'],
	['International Wines','Photos/2017-11-17 Wine-Club 16 Jaydon_International/2017-11-17 Wine-Club 16 Jaydon_International_08.jpg'],
	['International Wines','Photos/2017-11-17 Wine-Club 16 Jaydon_International/2017-11-17 Wine-Club 16 Jaydon_International_09.jpg'],
	['International Wines','Photos/2017-11-17 Wine-Club 16 Jaydon_International/2017-11-17 Wine-Club 16 Jaydon_International_10.jpg'],
	['International Wines','Photos/2017-11-17 Wine-Club 16 Jaydon_International/2017-11-17 Wine-Club 16 Jaydon_International_12.jpg'],
	['International Wines','Photos/2017-11-17 Wine-Club 16 Jaydon_International/2017-11-17 Wine-Club 16 Jaydon_International_13.jpg'],
	['International Wines','Photos/2017-11-17 Wine-Club 16 Jaydon_International/2017-11-17 Wine-Club 16 Jaydon_International_14.jpg'],
	['International Wines','Photos/2017-11-17 Wine-Club 16 Jaydon_International/2017-11-17 Wine-Club 16 Jaydon_International_15.jpg'],
	['International Wines','Photos/2017-11-17 Wine-Club 16 Jaydon_International/2017-11-17 Wine-Club 16 Jaydon_International_16.jpg'],
	['International Wines','Photos/2017-11-17 Wine-Club 16 Jaydon_International/2017-11-17 Wine-Club 16 Jaydon_International_17.jpg'],
	['International Wines','Photos/2017-11-17 Wine-Club 16 Jaydon_International/2017-11-17 Wine-Club 16 Jaydon_International_18.jpg'],
	['International Wines','Photos/2017-11-17 Wine-Club 16 Jaydon_International/2017-11-17 Wine-Club 16 Jaydon_International_19.jpg'],
	['International Wines','Photos/2017-11-17 Wine-Club 16 Jaydon_International/2017-11-17 Wine-Club 16 Jaydon_International_20.jpg'],
	['International Wines','Photos/2017-11-17 Wine-Club 16 Jaydon_International/2017-11-17 Wine-Club 16 Jaydon_International_22.jpg'],
	['International Wines','Photos/2017-11-17 Wine-Club 16 Jaydon_International/2017-11-17 Wine-Club 16 Jaydon_International_23.jpg'],
];

var imgDessert = [
	['Dessert Wines','Photos/2018-01-13 Wine-Club 17 Matt_Dessert Wines/2018-01-13 Wine-Club 17 Matt_Dessert Wines_03.jpg'],
	['Dessert Wines','Photos/2018-01-13 Wine-Club 17 Matt_Dessert Wines/2018-01-13 Wine-Club 17 Matt_Dessert Wines_04.jpg'],
	['Dessert Wines','Photos/2018-01-13 Wine-Club 17 Matt_Dessert Wines/2018-01-13 Wine-Club 17 Matt_Dessert Wines_05.jpg'],
	['Dessert Wines','Photos/2018-01-13 Wine-Club 17 Matt_Dessert Wines/2018-01-13 Wine-Club 17 Matt_Dessert Wines_06.jpg'],
	['Dessert Wines','Photos/2018-01-13 Wine-Club 17 Matt_Dessert Wines/2018-01-13 Wine-Club 17 Matt_Dessert Wines_07.jpg'],
	['Dessert Wines','Photos/2018-01-13 Wine-Club 17 Matt_Dessert Wines/2018-01-13 Wine-Club 17 Matt_Dessert Wines_08.jpg'],
	['Dessert Wines','Photos/2018-01-13 Wine-Club 17 Matt_Dessert Wines/2018-01-13 Wine-Club 17 Matt_Dessert Wines_09.jpg'],
	['Dessert Wines','Photos/2018-01-13 Wine-Club 17 Matt_Dessert Wines/2018-01-13 Wine-Club 17 Matt_Dessert Wines_10.jpg'],
	['Dessert Wines','Photos/2018-01-13 Wine-Club 17 Matt_Dessert Wines/2018-01-13 Wine-Club 17 Matt_Dessert Wines_11.jpg'],
	['Dessert Wines','Photos/2018-01-13 Wine-Club 17 Matt_Dessert Wines/2018-01-13 Wine-Club 17 Matt_Dessert Wines_12.jpg'],
	['Dessert Wines','Photos/2018-01-13 Wine-Club 17 Matt_Dessert Wines/2018-01-13 Wine-Club 17 Matt_Dessert Wines_13.jpg'],
	['Dessert Wines','Photos/2018-01-13 Wine-Club 17 Matt_Dessert Wines/2018-01-13 Wine-Club 17 Matt_Dessert Wines_14.jpg'],
	['Dessert Wines','Photos/2018-01-13 Wine-Club 17 Matt_Dessert Wines/2018-01-13 Wine-Club 17 Matt_Dessert Wines_15.jpg'],
	['Dessert Wines','Photos/2018-01-13 Wine-Club 17 Matt_Dessert Wines/2018-01-13 Wine-Club 17 Matt_Dessert Wines_16.jpg'],
	['Dessert Wines','Photos/2018-01-13 Wine-Club 17 Matt_Dessert Wines/2018-01-13 Wine-Club 17 Matt_Dessert Wines_17.jpg'],
	['Dessert Wines','Photos/2018-01-13 Wine-Club 17 Matt_Dessert Wines/2018-01-13 Wine-Club 17 Matt_Dessert Wines_21.jpg'],
	['Dessert Wines','Photos/2018-01-13 Wine-Club 17 Matt_Dessert Wines/2018-01-13 Wine-Club 17 Matt_Dessert Wines_18.jpg'],
	['Dessert Wines','Photos/2018-01-13 Wine-Club 17 Matt_Dessert Wines/2018-01-13 Wine-Club 17 Matt_Dessert Wines_01.jpg'],
	['Dessert Wines','Photos/2018-01-13 Wine-Club 17 Matt_Dessert Wines/2018-01-13 Wine-Club 17 Matt_Dessert Wines_02.jpg'],
	['Dessert Wines','Photos/2018-01-13 Wine-Club 17 Matt_Dessert Wines/2018-01-13 Wine-Club 17 Matt_Dessert Wines_19.jpg'],
	['Dessert Wines','Photos/2018-01-13 Wine-Club 17 Matt_Dessert Wines/2018-01-13 Wine-Club 17 Matt_Dessert Wines_20.jpg'],
	['Dessert Wines','Photos/2018-01-13 Wine-Club 17 Matt_Dessert Wines/2018-01-13 Wine-Club 17 Matt_Dessert Wines_22.jpg'],
	['Dessert Wines','Photos/2018-01-13 Wine-Club 17 Matt_Dessert Wines/2018-01-13 Wine-Club 17 Matt_Dessert Wines_23.jpg'],
];

var imgPlayoffs = [
	['International Play-offs','Photos/2018-02-24 Wine-Club 18 Bronwen_International Playoffs/2018-02-24 Wine-Club 18 Bronwen_International Playoffs_01.jpg'],
	['International Play-offs','Photos/2018-02-24 Wine-Club 18 Bronwen_International Playoffs/2018-02-24 Wine-Club 18 Bronwen_International Playoffs_02.jpg'],
	['International Play-offs','Photos/2018-02-24 Wine-Club 18 Bronwen_International Playoffs/2018-02-24 Wine-Club 18 Bronwen_International Playoffs_03.jpg'],
	['International Play-offs','Photos/2018-02-24 Wine-Club 18 Bronwen_International Playoffs/2018-02-24 Wine-Club 18 Bronwen_International Playoffs_04.jpg'],
	['International Play-offs','Photos/2018-02-24 Wine-Club 18 Bronwen_International Playoffs/2018-02-24 Wine-Club 18 Bronwen_International Playoffs_05.jpg'],
	['International Play-offs','Photos/2018-02-24 Wine-Club 18 Bronwen_International Playoffs/2018-02-24 Wine-Club 18 Bronwen_International Playoffs_06.jpg'],
	['International Play-offs','Photos/2018-02-24 Wine-Club 18 Bronwen_International Playoffs/2018-02-24 Wine-Club 18 Bronwen_International Playoffs_07.jpg'],
	['International Play-offs','Photos/2018-02-24 Wine-Club 18 Bronwen_International Playoffs/2018-02-24 Wine-Club 18 Bronwen_International Playoffs_08.jpg'],
	['International Play-offs','Photos/2018-02-24 Wine-Club 18 Bronwen_International Playoffs/2018-02-24 Wine-Club 18 Bronwen_International Playoffs_09.jpg'],
	['International Play-offs','Photos/2018-02-24 Wine-Club 18 Bronwen_International Playoffs/2018-02-24 Wine-Club 18 Bronwen_International Playoffs_10.jpg'],
	['International Play-offs','Photos/2018-02-24 Wine-Club 18 Bronwen_International Playoffs/2018-02-24 Wine-Club 18 Bronwen_International Playoffs_11.jpg'],
	['International Play-offs','Photos/2018-02-24 Wine-Club 18 Bronwen_International Playoffs/2018-02-24 Wine-Club 18 Bronwen_International Playoffs_12.jpg'],
	['International Play-offs','Photos/2018-02-24 Wine-Club 18 Bronwen_International Playoffs/2018-02-24 Wine-Club 18 Bronwen_International Playoffs_13.jpg'],
	['International Play-offs','Photos/2018-02-24 Wine-Club 18 Bronwen_International Playoffs/2018-02-24 Wine-Club 18 Bronwen_International Playoffs_14.jpg'],
	['International Play-offs','Photos/2018-02-24 Wine-Club 18 Bronwen_International Playoffs/2018-02-24 Wine-Club 18 Bronwen_International Playoffs_15.jpg'],
	['International Play-offs','Photos/2018-02-24 Wine-Club 18 Bronwen_International Playoffs/2018-02-24 Wine-Club 18 Bronwen_International Playoffs_16.jpg'],
	['International Play-offs','Photos/2018-02-24 Wine-Club 18 Bronwen_International Playoffs/2018-02-24 Wine-Club 18 Bronwen_International Playoffs_17.jpg'],
	['International Play-offs','Photos/2018-02-24 Wine-Club 18 Bronwen_International Playoffs/2018-02-24 Wine-Club 18 Bronwen_International Playoffs_18.jpg'],
	['International Play-offs','Photos/2018-02-24 Wine-Club 18 Bronwen_International Playoffs/2018-02-24 Wine-Club 18 Bronwen_International Playoffs_19.jpg'],
	['International Play-offs','Photos/2018-02-24 Wine-Club 18 Bronwen_International Playoffs/2018-02-24 Wine-Club 18 Bronwen_International Playoffs_20.jpg'],
	['International Play-offs','Photos/2018-02-24 Wine-Club 18 Bronwen_International Playoffs/2018-02-24 Wine-Club 18 Bronwen_International Playoffs_21.jpg'],
	['International Play-offs','Photos/2018-02-24 Wine-Club 18 Bronwen_International Playoffs/2018-02-24 Wine-Club 18 Bronwen_International Playoffs_22.jpg'],
	['International Play-offs','Photos/2018-02-24 Wine-Club 18 Bronwen_International Playoffs/2018-02-24 Wine-Club 18 Bronwen_International Playoffs_23.jpg'],
	['International Play-offs','Photos/2018-02-24 Wine-Club 18 Bronwen_International Playoffs/2018-02-24 Wine-Club 18 Bronwen_International Playoffs_24.jpg'],
	['International Play-offs','Photos/2018-02-24 Wine-Club 18 Bronwen_International Playoffs/2018-02-24 Wine-Club 18 Bronwen_International Playoffs_25.jpg'],
	['International Play-offs','Photos/2018-02-24 Wine-Club 18 Bronwen_International Playoffs/2018-02-24 Wine-Club 18 Bronwen_International Playoffs_26.jpg'],
	['International Play-offs','Photos/2018-02-24 Wine-Club 18 Bronwen_International Playoffs/2018-02-24 Wine-Club 18 Bronwen_International Playoffs_27.jpg'],
	['International Play-offs','Photos/2018-02-24 Wine-Club 18 Bronwen_International Playoffs/2018-02-24 Wine-Club 18 Bronwen_International Playoffs_28.jpg'],
	['International Play-offs','Photos/2018-02-24 Wine-Club 18 Bronwen_International Playoffs/2018-02-24 Wine-Club 18 Bronwen_International Playoffs_29.jpg'],
	['International Play-offs','Photos/2018-02-24 Wine-Club 18 Bronwen_International Playoffs/2018-02-24 Wine-Club 18 Bronwen_International Playoffs_30.jpg'],
	['International Play-offs','Photos/2018-02-24 Wine-Club 18 Bronwen_International Playoffs/2018-02-24 Wine-Club 18 Bronwen_International Playoffs_31.jpg'],
	['International Play-offs','Photos/2018-02-24 Wine-Club 18 Bronwen_International Playoffs/2018-02-24 Wine-Club 18 Bronwen_International Playoffs_32.jpg'],
	['International Play-offs','Photos/2018-02-24 Wine-Club 18 Bronwen_International Playoffs/2018-02-24 Wine-Club 18 Bronwen_International Playoffs_33.jpg'],
	['International Play-offs','Photos/2018-02-24 Wine-Club 18 Bronwen_International Playoffs/2018-02-24 Wine-Club 18 Bronwen_International Playoffs_34.jpg'],
	['International Play-offs','Photos/2018-02-24 Wine-Club 18 Bronwen_International Playoffs/2018-02-24 Wine-Club 18 Bronwen_International Playoffs_35.jpg'],
	['International Play-offs','Photos/2018-02-24 Wine-Club 18 Bronwen_International Playoffs/2018-02-24 Wine-Club 18 Bronwen_International Playoffs_36.jpg'],
	['International Play-offs','Photos/2018-02-24 Wine-Club 18 Bronwen_International Playoffs/2018-02-24 Wine-Club 18 Bronwen_International Playoffs_37.jpg'],
	['International Play-offs','Photos/2018-02-24 Wine-Club 18 Bronwen_International Playoffs/2018-02-24 Wine-Club 18 Bronwen_International Playoffs_38.jpg'],
];



// Top 10 arrays
var top10WinesList = [ 
	['Grande Cuvée','Photos/2017-03-25-Wine-Club-09_Matt_White Wine (GIF Night)/2017-03-25-Wine-Club-09_Matt_White Wine (GIF Night)_09.jpg', 'Boschendal', '2016', 'Sauvignon Blanc', 'GIF Night', '','4','9.42', 'checked', '', '', '', '', 'Jaydon Webb'],
	['J.C. le Roux La Vallée Methode Cap Classique Demi-Sec','Photos/2017-06-23 Wine-Club 11_Jaydon_Celebrations/2017-06-23-Wine-Club-11_Jaydon_Celebrations_05.jpg', 'J.C. le Roux', '2016', 'Demi-Sec', 'Celebrations', '','5','9.24', 'checked', '', '', '', '', 'Matthew Renaud'],
	['Diemersdal Estate Unwooded Chardonnay','Photos/2017-08-12 Wine-Club 13_Bronwen_Mystery Wines/2017-08-12 Wine-Club 13_Bronwen_Mystery Wines_06.jpg', 'Diemersdal Estate', '2017', 'Unwooded Chardonnay', 'Mystery Wine Night', '','5','9.16', 'checked', '', '', '', '', 'Bronwen Smith'],
	['Delle Venezie','Photos/2017-11-17 Wine-Club 16 Jaydon_International/2017-11-17 Wine-Club 16 Jaydon_International_06.jpg', 'Zenato', '2016', 'Pinot Grigio', 'International Wines', '','7','9.16', 'checked', '', '', '', '', 'Jaydon Webb'],
	['Statue de Femme','Photos/2018-01-13 Wine-Club 17 Matt_Dessert Wines/2018-01-13 Wine-Club 17 Matt_Dessert Wines_03.jpg', 'Franschhoek Cellar', '2017', 'Sauvignon Blanc', 'Dessert Wines', '','8','9.15', 'checked', '', '', '', '', 'Kurt Jonathan'],
	['Neberburg Rosé','Photos/2017-02-18-Wine-Club-08_Bronwen_Valentines-Rose/2017-02-18-Wine-Club-08_Bronwen_Valentines-Rose_05.jpg', 'Nederburg', '2016', 'Rosé', 'Valentines Rosé', '','6','9.10', 'checked', '', '', '', '', 'Shalby'],
	['Casillero del Diablo','Photos/2017-11-17 Wine-Club 16 Jaydon_International/2017-11-17 Wine-Club 16 Jaydon_International_15.jpg', 'Cancha y Toro', '2015', 'Carmeriere', 'International Wines', '','7','8.99', '', 'checked', '', '', '', 'Alex Nossek'],
	['Bin 40','Photos/2017-11-17 Wine-Club 16 Jaydon_International/2017-11-17 Wine-Club 16 Jaydon_International_19.jpg', 'Lindeman\'s', '2014', 'Merlot', 'International Wines', '','7','8.96', '', 'checked', '', '', '', 'Kurt Jonathan'],
	['Mulderbosch Cabernet Sauvignon Rosé','Photos/2017-02-18-Wine-Club-08_Bronwen_Valentines-Rose/2017-02-18-Wine-Club-08_Bronwen_Valentines-Rose_09.jpg', 'Mulderbosch Vineyards', '2015', 'Cabernet Sauvignon Rosé', 'Valentines Rosé', '','6','8.95', '', 'checked', '', '', '', 'Bronwen Smith'],
	['Spice Route Viognier','Photos/2017-08-12 Wine-Club 13_Bronwen_Mystery Wines/2017-08-12 Wine-Club 13_Bronwen_Mystery Wines_04.jpg', 'Spice Route', '2015', 'Viognier', 'Mystery Wine Night', '','5','8.93', '', 'checked', '', '', '', 'Bronwen Smith'],


];


function SetupImages(themeId){
	// Theme ID, 1 = Rotation1, 2 = Rotation2, etc
	
	var gallery = FindImagesByThemeID(themeId);
	
	for (var i = 0, len = gallery.length; i < len; i++) {
		//http://fancyapps.com/fancybox/demo/
		var imagesString = "";
		if(gallery[i].length > 2){
			imagesString = $('<div/>').addClass("col-lg-"+gallery[i][2]+" col-md-4 col-xs-6 thumb post-box")
				.append($('<a/>').addClass("fancybox-thumbs").attr("href", "../" + gallery[i][1]).attr("data-fancybox-group", "gallery").attr("title", gallery[i][0])
				.append($('<img/>').attr("alt", "").attr("src", "../" + gallery[i][1]).addClass("img-responsive")
				)
			);
		}
		else{
			imagesString = $('<div/>').addClass("col-lg-3 col-md-4 col-xs-6 thumb post-box")
				.append($('<a/>').addClass("fancybox-thumbs fancyboxBlog").attr("href", "../" + gallery[i][1]).attr("data-fancybox-group", "gallery").attr("title", gallery[i][0])
				.append($('<img/>').attr("alt", "").attr("src", "../" + gallery[i][1]).addClass("img-responsive")
				)
			);
		}
		$('#divImages').append(imagesString);
		
		
		var container = $('#divImages');
		container.imagesLoaded()
		  .always(function (instance) {
			  //console.log('all images loaded');
		  })
		  .done(function (instance) {
			  //console.log('all images successfully loaded');
			  container.masonry({
				  itemSelector: '.post-box',
				  columnWidth: '.post-box',
				  transitionDuration: 0
			  });
		  })
		  .fail(function () {
			  //console.log('all images loaded, at least one is broken');
		  })
		  .progress(function (instance, image) {
			  var result = image.isLoaded ? 'loaded' : 'broken';
			  if(result === "broken")
			  console.log('image is ' + result + ' for ' + image.img.src);
		  });
		  
	}
	
	SetupFancyBox();
}

function FindImagesByThemeID(themeId){
	switch(themeId) {
    case 1:
        return imgRotation1;
        break;
    case 2:
        return imgRotation2;
    case 3:
        return imgRotation3;
        break;
    case 4:
        return imgRotation4;
        break;
    case 5:
        return imgHalloween;
        break;
    case 6:
        return imgPre2015;
        break;
    case 7:
        return imgNewYears;
        break;
    case 8:
        return imgValentines;
        break;
    case 9:
        return imgGIFWines;
        break;
    case 10:
        return imgCheapWine;
        break;
    case 11:
        return imgCelebrations;
        break;
    case 12:
        return imgRedWines;
        break;
    case 13:
        return imgMysteryNight;
        break;
    case 14:
        return imgPizzaEvening;
        break;
    case 15:
        return imgOddBins;
        break;
    case 16:
        return imgInternational;
        break;
    case 17:
        return imgDessert;
        break;
    case 18:
        return imgPlayoffs;
        break;
    default:
        return null;
	}	
}

function SetupFancyBox() {
	$('li img').on('click', function () {
		var src = $(this).attr('src');
		var img = '<img src="' + src + '" class="img-responsive"/>';
		var name = $(this).attr('name') || '';
		$('#myModal').modal();
		$('#myModal').on('shown.bs.modal', function () {
			$('#myModal .modalBody').html(img);
			$('#myModal .modalFooter').html(name);
		});
		$('#myModal').on('hidden.bs.modal', function () {
			$('#myModal .modalBody').html('');
			$('#myModal .modalFooter').html('');
		});
	});

	var $container = $('#photos');

	$container.imagesLoaded()
		.always(function (instance) {
			//console.log('all images loaded');
		})
		.done(function (instance) {
			//console.log('all images successfully loaded');
			$container.masonry({
				itemSelector: '.post-box',
				columnWidth: '.post-box',
				transitionDuration: 0
			});
		})
		.fail(function () {
			console.log('all images loaded, at least one is broken');
		})
		.progress(function (instance, image) {
			var result = image.isLoaded ? 'loaded' : 'broken';
			//console.log('image is ' + result + ' for ' + image.img.src);
		});
	

	$('.fancybox-thumbs').click(function (e) {
		var uniques = {};
		$(this).attr('rel', 'gallery');
		uniques[$(this).attr('href')] = true;
		$('.fancybox').not(this).each(function () {
			href = $(this).attr('href');
			if (!uniques[href]) {
				$(this).attr('rel', 'gallery');
				uniques[href] = true;
			} else {
				$(this).attr('rel', '');
			}
		});

		$('.fancybox-thumbs').fancybox({
			helpers: {
				thumbs: {
					width: 50,
					height: 50
				}
			}
		});
	});
	
	$('.fancyboxScoreSheet').click(function (e) {
		var uniques = {};
		$(this).attr('rel', 'gallery');
		uniques[$(this).attr('href')] = true;
		$('.fancybox').not(this).each(function () {
			href = $(this).attr('href');
			if (!uniques[href]) {
				$(this).attr('rel', 'gallery');
				uniques[href] = true;
			} else {
				$(this).attr('rel', '');
			}
		});

		$('.fancyboxScoreSheet').fancybox({
			helpers: {
				thumbs: {
					width: 0,
					height: 0
				}
			}
		});
	});
		

		
}