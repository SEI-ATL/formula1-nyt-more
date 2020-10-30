const API_KEY = 'CtrdXqFgtcu1kvIvv4GAREAhj2ReSDgv';
console.log(API_KEY);

////// attaches class name to each new object in the array ///////
async function semanticsMusic() {

    const semantics = await fetch(`https://api.nytimes.com/svc/semantic/v2/concept/search.json?query=music&api-key=${API_KEY}`)
    const json = await semantics.json()).then((json)
    class SemanticsFilter {
    constructor(concept_id, concept_name, vernacular) {
      this.concept_id = concept_id;
      this.concept_name = concept_name;
      this.vernacular = vernacular;
    }
  } 
    function dataFilter(array) {
        const newArray = [];
        for (i = 0; i < array.length; i++) {
        let newsemantics = new SemanticsFilter(array.results[i].concept_id, array.results[i].concept_name, array.results[i].concept_vernacular);
        newArray.push(newsemantics);
        return newArray;
  }
    const musicSemantics = dataFilter(semantics); // does this also need an await?
    console.log(musicSemantics);
}

////////// for when fetch wasn't working: //////////// 

const semanticsdata = {
    "status": "OK",
    "copyright": "Copyright (c) 2015 The New York Times Company. All Rights Reserved.",
    "num_results": 500,
    "results": [
      {
        "concept_id": 1387308,
        "concept_name": "10,000 Maniacs (Music Group)",
        "is_times_tag": null,
        "is_sensitive": 0,
        "concept_status": "Active",
        "vernacular": "10,000 Maniacs",
        "concept_type": "nytd_org",
        "concept_created": "2013-04-23 06:51:37-04:00",
        "concept_updated": "2015-04-22 21:19:01-04:00",
        "concept_rule": null,
        "concept_gender": null
      },
      {
        "concept_id": 100104890,
        "concept_name": "100 gecs (Music Group)",
        "is_times_tag": 1,
        "is_sensitive": 0,
        "concept_status": "Active",
        "vernacular": "100 gecs",
        "concept_type": "nytd_org",
        "concept_created": "2019-09-05 09:49:03-04:00",
        "concept_updated": "2019-09-05 09:50:18-04:00",
        "concept_rule": null,
        "concept_gender": null
      },
      {
        "concept_id": 100098802,
        "concept_name": "13th Floor Elevators (Music Group)",
        "is_times_tag": 1,
        "is_sensitive": 0,
        "concept_status": "Active",
        "vernacular": "13th Floor Elevators",
        "concept_type": "nytd_org",
        "concept_created": "2019-06-04 09:33:59-04:00",
        "concept_updated": "2019-06-04 09:34:40-04:00",
        "concept_rule": null,
        "concept_gender": null
      },
      {
        "concept_id": 100072590,
        "concept_name": "16yrold (Music Producer)",
        "is_times_tag": 1,
        "is_sensitive": 0,
        "concept_status": "Active",
        "vernacular": "16yrold",
        "concept_type": "nytd_per",
        "concept_created": "2018-09-05 10:51:03-04:00",
        "concept_updated": "2018-09-05 10:51:47-04:00",
        "concept_rule": null,
        "concept_gender": null
      },
      {
        "concept_id": 20480140,
        "concept_name": "1975, The (Music Group)",
        "is_times_tag": 1,
        "is_sensitive": 0,
        "concept_status": "Active",
        "vernacular": "The 1975",
        "concept_type": "nytd_org",
        "concept_created": "2016-03-08 12:57:54-05:00",
        "concept_updated": "2016-03-08 12:58:49-05:00",
        "concept_rule": null,
        "concept_gender": null
      },
      {
        "concept_id": 33440276,
        "concept_name": "1B1 (Music Group)",
        "is_times_tag": 1,
        "is_sensitive": 0,
        "concept_status": "Active",
        "vernacular": "1B1",
        "concept_type": "nytd_org",
        "concept_created": "2016-05-23 12:49:56-04:00",
        "concept_updated": "2016-05-23 12:50:15-04:00",
        "concept_rule": null,
        "concept_gender": null
      },
      {
        "concept_id": 100118129,
        "concept_name": "20/20 (Music Group)",
        "is_times_tag": 1,
        "is_sensitive": 0,
        "concept_status": "Active",
        "vernacular": "20/20",
        "concept_type": "nytd_org",
        "concept_created": "2020-05-13 14:35:52-04:00",
        "concept_updated": "2020-05-13 14:38:06-04:00",
        "concept_rule": null,
        "concept_gender": null
      },
      {
        "concept_id": 1130996,
        "concept_name": "2:54 (Music Group)",
        "is_times_tag": null,
        "is_sensitive": 0,
        "concept_status": "Active",
        "vernacular": "2:54",
        "concept_type": "nytd_org",
        "concept_created": "2013-02-26 02:06:26-05:00",
        "concept_updated": "2015-04-22 21:19:05-04:00",
        "concept_rule": null,
        "concept_gender": null
      },
      {
        "concept_id": 33680224,
        "concept_name": "2Cellos (Music Group)",
        "is_times_tag": 1,
        "is_sensitive": 0,
        "concept_status": "Active",
        "vernacular": "2Cellos",
        "concept_type": "nytd_org",
        "concept_created": "2016-05-25 09:31:41-04:00",
        "concept_updated": "2016-05-25 09:31:52-04:00",
        "concept_rule": null,
        "concept_gender": null
      },
      {
        "concept_id": 1131008,
        "concept_name": "2NE1 (Music Group)",
        "is_times_tag": null,
        "is_sensitive": 0,
        "concept_status": "Active",
        "vernacular": "2NE1",
        "concept_type": "nytd_org",
        "concept_created": "2013-02-26 02:06:26-05:00",
        "concept_updated": "2015-04-22 21:19:05-04:00",
        "concept_rule": null,
        "concept_gender": null
      },
      {
        "concept_id": 1131060,
        "concept_name": "30 Seconds to Mars (Music Group)",
        "is_times_tag": null,
        "is_sensitive": 0,
        "concept_status": "Active",
        "vernacular": "30 Seconds to Mars",
        "concept_type": "nytd_org",
        "concept_created": "2013-02-26 02:06:26-05:00",
        "concept_updated": "2015-04-22 21:19:06-04:00",
        "concept_rule": null,
        "concept_gender": null
      },
      {
        "concept_id": 100051641,
        "concept_name": "3MA (Music Group)",
        "is_times_tag": 1,
        "is_sensitive": 0,
        "concept_status": "Active",
        "vernacular": "3MA",
        "concept_type": "nytd_org",
        "concept_created": "2018-01-19 17:30:58-05:00",
        "concept_updated": "2018-01-19 17:31:53-05:00",
        "concept_rule": null,
        "concept_gender": null
      },
      {
        "concept_id": 1399740,
        "concept_name": "3OH!3 (Music Group)",
        "is_times_tag": null,
        "is_sensitive": 0,
        "concept_status": "Active",
        "vernacular": "3OH!3",
        "concept_type": "nytd_org",
        "concept_created": "2013-06-19 07:03:30-04:00",
        "concept_updated": "2015-04-22 21:19:08-04:00",
        "concept_rule": null,
        "concept_gender": null
      },
      {
        "concept_id": 1517484,
        "concept_name": "3rdeyegirl (Music Group)",
        "is_times_tag": 1,
        "is_sensitive": 0,
        "concept_status": "Active",
        "vernacular": "3rdeyegirl",
        "concept_type": "nytd_org",
        "concept_created": "2014-09-30 15:02:40-04:00",
        "concept_updated": "2014-09-30 15:02:51-04:00",
        "concept_rule": null,
        "concept_gender": null
      },
      {
        "concept_id": 100045810,
        "concept_name": "40 Years in the Making: The Magic Music Movie (Movie)",
        "is_times_tag": 1,
        "is_sensitive": 0,
        "concept_status": "Deleted",
        "vernacular": "40 Years in the Making: The Magic Music Movie",
        "concept_type": "nytd_ttl",
        "concept_created": "2017-11-14 01:02:47-05:00",
        "concept_updated": "2018-04-11 19:56:13-04:00",
        "concept_rule": null,
        "concept_gender": null
      },
      {
        "concept_id": 100094049,
        "concept_name": "42nd Street the Musical (Movie)",
        "is_times_tag": 1,
        "is_sensitive": 0,
        "concept_status": "Deleted",
        "vernacular": "42nd Street the Musical",
        "concept_type": "nytd_ttl",
        "concept_created": "2019-04-16 02:02:50-04:00",
        "concept_updated": "2019-10-03 12:53:27-04:00",
        "concept_rule": null,
        "concept_gender": null
      },
      {
        "concept_id": 100094855,
        "concept_name": "42nd Street: The Musical (Movie)",
        "is_times_tag": 1,
        "is_sensitive": 0,
        "concept_status": "Deleted",
        "vernacular": "42nd Street: The Musical",
        "concept_type": "nytd_ttl",
        "concept_created": "2019-04-28 02:00:16-04:00",
        "concept_updated": "2019-10-03 12:53:35-04:00",
        "concept_rule": null,
        "concept_gender": null
      },
      {
        "concept_id": 100025939,
        "concept_name": "4'33\" (Musical Work)",
        "is_times_tag": 1,
        "is_sensitive": 0,
        "concept_status": "Active",
        "vernacular": "4'33\"",
        "concept_type": "nytd_ttl",
        "concept_created": "2017-05-25 21:10:12-04:00",
        "concept_updated": "2017-05-25 21:10:12-04:00",
        "concept_rule": null,
        "concept_gender": null
      },
      {
        "concept_id": 100084777,
        "concept_name": "47Soul (Music Group)",
        "is_times_tag": 1,
        "is_sensitive": 0,
        "concept_status": "Active",
        "vernacular": "47Soul",
        "concept_type": "nytd_org",
        "concept_created": "2019-01-08 10:15:43-05:00",
        "concept_updated": "2019-01-08 10:26:36-05:00",
        "concept_rule": null,
        "concept_gender": null
      },
      {
        "concept_id": 70632,
        "concept_name": "4x4 Baroque Music Festival",
        "is_times_tag": 1,
        "is_sensitive": 0,
        "concept_status": "Active",
        "vernacular": "4x4 Baroque Music Festival",
        "concept_type": "nytd_des",
        "concept_created": "2011-08-11 15:56:01-04:00",
        "concept_updated": "2017-03-21 20:02:05-04:00",
        "concept_rule": "(OR,\"4x4 Baroque Music Festival\")",
        "concept_gender": null
      }
    ]
  }

