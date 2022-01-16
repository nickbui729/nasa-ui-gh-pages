import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Table } from 'reactstrap';
import TableRow from "./TableRow";
import styles from './Categories.module.css';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

const CategoryGroupContainer = () => {

    let testObject = {
        "stats": {
            "took": 119,
            "total": 3910,
            "estimate": false,
            "maxScore": 0
        },
        "results": [
            {
                "_meta": {
                    "score": 0
                },
                "copyright": {
                    "licenseType": "NO",
                    "determinationType": "GOV_PUBLIC_USE_PERMITTED",
                    "thirdPartyContentCondition": "NOT_SET"
                },
                "subjectCategories": [
                    "Aerodynamics"
                ],
                "exportControl": {
                    "isExportControl": "NO",
                    "ear": "NO",
                    "itar": "NO"
                },
                "created": "2013-08-09T02:56:00.0000000+00:00",
                "distributionDate": "2019-06-20T00:00:00.0000000+00:00",
                "otherReportNumbers": [
                    "NASA-SP-301",
                    "C72-71337"
                ],
                "center": {
                    "code": "AFRC",
                    "name": "Armstrong Flight Research Center",
                    "id": "e73d2557fd354e1990dafbf2de9bce78"
                },
                "onlyAbstract": false,
                "sensitiveInformation": 2,
                "abstract": "The papers in this compilation were presented at the NASA Symposium on \"Supercritical Wing Technology: A Progress Report on Flight Evaluation\" held at the NASA Flight Research Center, Edwards, Calif., on February 29, 1972. The purpose of the symposium was to present timely information on flight results obtained with the F-8 and T-2C supercritical wing configurations, discuss comparisons with wind-tunnel predictions, and project [ ] flight programs planned for the F-8 and F-III (TACT) airplanes.",
                "title": "Supercritical Wing Technology: A Progress Report on Flight Evaluations",
                "stiType": "SPECIAL_PUBLICATION",
                "distribution": "PUBLIC",
                "submittedDate": "2013-08-09T02:56:00.0000000+00:00",
                "isLessonsLearned": false,
                "disseminated": "DOCUMENT_AND_METADATA",
                "stiTypeDetails": "Special Publication (SP)",
                "technicalReviewType": "TECHNICAL_REVIEW_TYPE_NONE",
                "modified": "2015-12-09T00:00:00.0000000+00:00",
                "id": 19770084252,
                "publications": [
                    {
                        "submissionId": 19770084252,
                        "publisher": "National Aeronautics and Space Administration",
                        "id": "08ee66b3e60b462184f45c9abd1024df",
                        "publicationDate": "1972-02-29T00:00:00.0000000+00:00"
                    }
                ],
                "status": "CURATED",
                "related": [
                    {
                        "disseminated": "METADATA_ONLY",
                        "id": 19770084253,
                        "type": "ANALYTIC_SUBSIDIARY",
                        "title": "The NASA supercritical airfoil and its application to swept wings",
                        "stiType": "OTHER",
                        "distribution": "PUBLIC",
                        "status": "CURATED"
                    },
                    {
                        "disseminated": "METADATA_ONLY",
                        "id": 19770084255,
                        "type": "ANALYTIC_SUBSIDIARY",
                        "title": "Evolution of the F-8 supercritical wing configuration",
                        "stiType": "OTHER",
                        "distribution": "PUBLIC",
                        "status": "CURATED"
                    },
                    {
                        "disseminated": "METADATA_ONLY",
                        "id": 19770084256,
                        "type": "ANALYTIC_SUBSIDIARY",
                        "title": "Status of the F-8 supercritical wing program",
                        "stiType": "OTHER",
                        "distribution": "PUBLIC",
                        "status": "CURATED"
                    },
                    {
                        "disseminated": "METADATA_ONLY",
                        "id": 19770084257,
                        "type": "ANALYTIC_SUBSIDIARY",
                        "title": "Preliminary lift and drag characteristics of the F-8 supercritical wing airplane",
                        "stiType": "OTHER",
                        "distribution": "PUBLIC",
                        "status": "CURATED"
                    },
                    {
                        "disseminated": "METADATA_ONLY",
                        "id": 19770084258,
                        "type": "ANALYTIC_SUBSIDIARY",
                        "title": "F-8 supercritical wing pressure distribution evaluation",
                        "stiType": "OTHER",
                        "distribution": "PUBLIC",
                        "status": "CURATED"
                    },
                    {
                        "disseminated": "METADATA_ONLY",
                        "id": 19770084259,
                        "type": "ANALYTIC_SUBSIDIARY",
                        "title": "Buffet characteristics of the F-8 supercritical wing airplane",
                        "stiType": "OTHER",
                        "distribution": "PUBLIC",
                        "status": "CURATED"
                    },
                    {
                        "disseminated": "METADATA_ONLY",
                        "id": 19770084260,
                        "type": "ANALYTIC_SUBSIDIARY",
                        "title": "Piloting and operational aspets of the F-8 supercritical wing airplane",
                        "stiType": "OTHER",
                        "distribution": "PUBLIC",
                        "status": "CURATED"
                    },
                    {
                        "disseminated": "METADATA_ONLY",
                        "id": 19770084261,
                        "type": "ANALYTIC_SUBSIDIARY",
                        "title": "Comments on wind-tunnel-flight correlations for the F-8 supercritical wing configurations",
                        "stiType": "OTHER",
                        "distribution": "PUBLIC",
                        "status": "CURATED"
                    },
                    {
                        "disseminated": "METADATA_ONLY",
                        "id": 19770084262,
                        "type": "ANALYTIC_SUBSIDIARY",
                        "title": "Summary and future plans",
                        "stiType": "OTHER",
                        "distribution": "PUBLIC",
                        "status": "CURATED"
                    }
                ],
                "downloads": [
                    {
                        "draft": false,
                        "mimetype": "application/pdf",
                        "name": "19770084252.pdf",
                        "type": "STI",
                        "links": {
                            "original": "/api/citations/19770084252/downloads/19770084252.pdf",
                            "pdf": "/api/citations/19770084252/downloads/19770084252.pdf",
                            "fulltext": "/api/citations/19770084252/downloads/19770084252.txt"
                        }
                    }
                ],
                "downloadsAvailable": true
            },
            {
                "_meta": {
                    "score": 0
                },
                "copyright": {
                    "licenseType": "NO",
                    "determinationType": "GOV_PUBLIC_USE_PERMITTED",
                    "thirdPartyContentCondition": "NOT_SET"
                },
                "subjectCategories": [
                    "Aerodynamics"
                ],
                "exportControl": {
                    "isExportControl": "NO",
                    "ear": "NO",
                    "itar": "NO"
                },
                "distributionDate": "2019-08-13T13:25:28.5030000+00:00",
                "otherReportNumbers": [
                    "NACA-RM-A51A03"
                ],
                "title": "Damping in a Roll of a Missile Configuration with a Modified Triangular Wing and a Cruciform Tail at a Mach Number of 1.52",
                "stiType": "OTHER",
                "distribution": "PUBLIC",
                "submittedDate": "2013-08-16T04:02:00.0000000+00:00",
                "authorAffiliations": [
                    {
                        "sequence": 0,
                        "submissionId": 19930086518,
                        "meta": {
                            "author": {
                                "name": "Scherrer, Richard"
                            },
                            "organization": {}
                        },
                        "id": "fca73daff47c40a199e52dfbfada0c77"
                    },
                    {
                        "sequence": 1,
                        "submissionId": 19930086518,
                        "meta": {
                            "author": {
                                "name": "Dennis, David H"
                            },
                            "organization": {}
                        },
                        "id": "fbf306a5b3cc458a84f20c9bcde0ff2d"
                    }
                ],
                "stiTypeDetails": "Other - NACA Research Memorandum",
                "technicalReviewType": "TECHNICAL_REVIEW_TYPE_NONE",
                "modified": "2016-09-12T00:00:00.0000000+00:00",
                "id": 19930086518,
                "created": "2013-08-16T04:02:00.0000000+00:00",
                "center": {
                    "code": "HQ",
                    "name": "Headquarters",
                    "id": "f0865a34ba1f474d865ab51f212fc69f"
                },
                "onlyAbstract": false,
                "sensitiveInformation": 2,
                "abstract": "The damping-in-Toll stability derivatives of a missile configuration and its components were determined both experimentally and theoretically. The tests were conducted at a Mach number of 1.52 and at a Reynolds number, based on the mean aerodynamic chord of the wing, of 0.82 x 10(exp 6). The experimental damping derivative of the wing-body combination was 67 percent of the theoretical value. The difference is believed to have resulted mainly from the fact that the theory is not strictly applicable when the Mach number normal to the leading edge is almost unity, which was the case in the present investigation. For the tail-body combination the damping derivative was 86 percent of the theoretical value. In this case, the difference is believed to have been caused partially by mutual interference between the tail surfaces and partially by the low Reynolds number of the flow over the tail. It was found that the damping of the complete configuration was not equal to the sum of the damping derivatives of the components because of the effect of the wing downwash on the damping of the tail.",
                "isLessonsLearned": false,
                "disseminated": "DOCUMENT_AND_METADATA",
                "publications": [
                    {
                        "submissionId": 19930086518,
                        "id": "7bb5e7a02ddd4122bef5ac614a5fa01f",
                        "publicationDate": "1951-03-06T00:00:00.0000000+00:00"
                    }
                ],
                "status": "CURATED",
                "related": [],
                "downloads": [
                    {
                        "draft": false,
                        "mimetype": "application/pdf",
                        "name": "19930086518.pdf",
                        "type": "STI",
                        "links": {
                            "original": "/api/citations/19930086518/downloads/19930086518.pdf",
                            "pdf": "/api/citations/19930086518/downloads/19930086518.pdf",
                            "fulltext": "/api/citations/19930086518/downloads/19930086518.txt"
                        }
                    }
                ],
                "downloadsAvailable": true
            },
            {
                "_meta": {
                    "score": 0
                },
                "copyright": {
                    "licenseType": "NO",
                    "determinationType": "PUBLIC_USE_PERMITTED",
                    "thirdPartyContentCondition": "NOT_SET"
                },
                "subjectCategories": [
                    "Research and Support Facilities (Air)",
                    "Aerodynamics"
                ],
                "exportControl": {
                    "isExportControl": "NO",
                    "ear": "NO",
                    "itar": "NO"
                },
                "distributionDate": "2019-07-12T00:00:00.0000000+00:00",
                "title": "AWT Modeling Status",
                "stiType": "OTHER",
                "distribution": "PUBLIC",
                "submittedDate": "2013-08-15T16:58:00.0000000+00:00",
                "authorAffiliations": [
                    {
                        "sequence": 0,
                        "submissionId": 19920075361,
                        "meta": {
                            "author": {
                                "name": "Abbott, John M."
                            },
                            "organization": {
                                "name": "NASA Glenn Research Center",
                                "location": "Cleveland, OH, United States"
                            }
                        },
                        "id": "371190ac36754430a7da8c5493072594"
                    }
                ],
                "stiTypeDetails": "Other",
                "technicalReviewType": "TECHNICAL_REVIEW_TYPE_NONE",
                "modified": "2018-12-27T00:00:00.0000000+00:00",
                "id": 19920075361,
                "created": "2013-08-15T16:58:00.0000000+00:00",
                "center": {
                    "code": "GRC",
                    "name": "Glenn Research Center",
                    "id": "19eeb25fa404421d9eaa5f876e853e3c"
                },
                "onlyAbstract": false,
                "sensitiveInformation": 2,
                "abstract": "The NASA Altitude Wind Tunnel (AWT) modeling status is presented through analytical and physical performance assessments. Topics covered in viewgraph format include: performance assessment and modeling, geometric dimensions, organization of task force, and schedule of events.",
                "isLessonsLearned": false,
                "disseminated": "DOCUMENT_AND_METADATA",
                "meetings": [
                    {
                        "country": "United States",
                        "submissionId": 19920075361,
                        "endDate": "1984-03-21T00:00:00.0000000+00:00",
                        "sponsors": [
                            {
                                "meta": {
                                    "organization": {
                                        "name": "NASA Glenn Research Center",
                                        "location": "Cleveland, OH, United States"
                                    }
                                },
                                "meetingId": "4a3c599d698e4373bb2fa37a3cb77081",
                                "id": "466c34cecdd74d77bfab9651c520acea"
                            }
                        ],
                        "name": "Wind Tunnel Modeling Seminar",
                        "location": "Cleveland, OH",
                        "id": "4a3c599d698e4373bb2fa37a3cb77081",
                        "startDate": "1984-03-20T00:00:00.0000000+00:00"
                    }
                ],
                "publications": [
                    {
                        "submissionId": 19920075361,
                        "id": "861e1c2103324dbaaf28ed1c71564be6",
                        "publicationName": "Wind Tunnel Modeling Seminar",
                        "publicationDate": "1984-03-20T00:00:00.0000000+00:00"
                    }
                ],
                "status": "CURATED",
                "related": [],
                "downloads": [
                    {
                        "draft": false,
                        "mimetype": "application/pdf",
                        "name": "19920075361.pdf",
                        "type": "STI",
                        "links": {
                            "original": "/api/citations/19920075361/downloads/19920075361.pdf",
                            "pdf": "/api/citations/19920075361/downloads/19920075361.pdf",
                            "fulltext": "/api/citations/19920075361/downloads/19920075361.txt"
                        }
                    }
                ],
                "downloadsAvailable": true
            },
            {
                "_meta": {
                    "score": 0
                },
                "copyright": {
                    "licenseType": "NO",
                    "determinationType": "PUBLIC_USE_PERMITTED",
                    "thirdPartyContentCondition": "NOT_SET"
                },
                "subjectCategories": [
                    "Aerodynamics",
                    "Research and Support Facilities (Air)"
                ],
                "exportControl": {
                    "isExportControl": "NO",
                    "ear": "NO",
                    "itar": "NO"
                },
                "distributionDate": "2019-08-13T15:54:08.7870000+00:00",
                "title": "NTF Modeling Program",
                "stiType": "OTHER",
                "distribution": "PUBLIC",
                "submittedDate": "2013-08-15T16:58:00.0000000+00:00",
                "authorAffiliations": [
                    {
                        "sequence": 0,
                        "submissionId": 19920075362,
                        "meta": {
                            "author": {
                                "name": "McKinney, L. Wayne"
                            },
                            "organization": {
                                "name": "NASA Langley Research Center",
                                "location": "Hampton, VA, United States"
                            }
                        },
                        "id": "89e99825c7244fd6b6f6d000705f59f1"
                    }
                ],
                "stiTypeDetails": "Other",
                "technicalReviewType": "TECHNICAL_REVIEW_TYPE_NONE",
                "modified": "2018-12-27T00:00:00.0000000+00:00",
                "id": 19920075362,
                "created": "2013-08-15T16:58:00.0000000+00:00",
                "center": {
                    "code": "GRC",
                    "name": "Glenn Research Center",
                    "id": "19eeb25fa404421d9eaa5f876e853e3c"
                },
                "onlyAbstract": false,
                "sensitiveInformation": 2,
                "abstract": "The National Transonic Facility presents a design for and assessment of a transonic wind tunnel. Among the topics covered in viewgraph format are: aerodynamic validation models, scale models of wind tunnel components, performance evaluations of various wind tunnel parameters, and drive systems.",
                "isLessonsLearned": false,
                "disseminated": "DOCUMENT_AND_METADATA",
                "meetings": [
                    {
                        "country": "United States",
                        "submissionId": 19920075362,
                        "endDate": "1984-03-21T00:00:00.0000000+00:00",
                        "sponsors": [
                            {
                                "meta": {
                                    "organization": {
                                        "name": "NASA Glenn Research Center",
                                        "location": "Cleveland, OH, United States"
                                    }
                                },
                                "meetingId": "be99928e90e2486295abb99ef28e35d7",
                                "id": "90df3f7849be4c1cb7ee2afdf15f3810"
                            }
                        ],
                        "name": "Wind Tunnel Modeling Seminar",
                        "location": "Cleveland, OH",
                        "id": "be99928e90e2486295abb99ef28e35d7",
                        "startDate": "1984-03-20T00:00:00.0000000+00:00"
                    }
                ],
                "publications": [
                    {
                        "submissionId": 19920075362,
                        "id": "083566e47bf1414f91b8d43c95423ac9",
                        "publicationName": "Wind Tunnel Modeling Seminar",
                        "publicationDate": "1984-03-20T00:00:00.0000000+00:00"
                    }
                ],
                "status": "CURATED",
                "related": [],
                "downloads": [
                    {
                        "draft": false,
                        "mimetype": "application/pdf",
                        "name": "19920075362.pdf",
                        "type": "STI",
                        "links": {
                            "original": "/api/citations/19920075362/downloads/19920075362.pdf",
                            "pdf": "/api/citations/19920075362/downloads/19920075362.pdf",
                            "fulltext": "/api/citations/19920075362/downloads/19920075362.txt"
                        }
                    }
                ],
                "downloadsAvailable": true
            },
            {
                "_meta": {
                    "score": 0
                },
                "copyright": {
                    "licenseType": "NO",
                    "determinationType": "PUBLIC_USE_PERMITTED",
                    "thirdPartyContentCondition": "NOT_SET"
                },
                "subjectCategories": [
                    "Research and Support Facilities (Air)",
                    "Aerodynamics"
                ],
                "exportControl": {
                    "isExportControl": "NO",
                    "ear": "NO",
                    "itar": "NO"
                },
                "distributionDate": "2019-08-13T14:35:24.5370000+00:00",
                "title": "4 X 7 M Modeling Program. The Use of Small-Scale Modeling in Defining Flow Improvements for the Langley 4 X 7-Meter Tunnel",
                "stiType": "OTHER",
                "distribution": "PUBLIC",
                "submittedDate": "2013-08-15T16:58:00.0000000+00:00",
                "authorAffiliations": [
                    {
                        "sequence": 0,
                        "submissionId": 19920075363,
                        "meta": {
                            "author": {
                                "name": "Applin, Zachery T."
                            },
                            "organization": {
                                "name": "NASA Langley Research Center",
                                "location": "Hampton, VA, United States"
                            }
                        },
                        "id": "cc0b75af38504880baf046bd5dee0f1a"
                    }
                ],
                "stiTypeDetails": "Other",
                "technicalReviewType": "TECHNICAL_REVIEW_TYPE_NONE",
                "modified": "2018-12-27T00:00:00.0000000+00:00",
                "id": 19920075363,
                "created": "2013-08-15T16:58:00.0000000+00:00",
                "center": {
                    "code": "GRC",
                    "name": "Glenn Research Center",
                    "id": "19eeb25fa404421d9eaa5f876e853e3c"
                },
                "onlyAbstract": false,
                "sensitiveInformation": 2,
                "abstract": "The use of small scale modeling in defining flow improvements for the Langley 4 x 7 meter wind tunnel is presented. Topics covered in viewgraph format include: description of the 4 x 7 meter wind tunnel, description of the 1/24 scale model, wind tunnel circuit flow characteristics, open test section turbulence characteristics, and conclusions.",
                "isLessonsLearned": false,
                "disseminated": "DOCUMENT_AND_METADATA",
                "meetings": [
                    {
                        "country": "United States",
                        "submissionId": 19920075363,
                        "endDate": "1984-03-21T00:00:00.0000000+00:00",
                        "sponsors": [
                            {
                                "meta": {
                                    "organization": {
                                        "name": "NASA Glenn Research Center",
                                        "location": "Cleveland, OH, United States"
                                    }
                                },
                                "meetingId": "02aa97e8e0f14039b8d47e5e81db7fd4",
                                "id": "d96dbd553b3349e8b98940da0c6a3bcd"
                            }
                        ],
                        "name": "Wind Tunnel Modeling Seminar",
                        "location": "Cleveland, OH",
                        "id": "02aa97e8e0f14039b8d47e5e81db7fd4",
                        "startDate": "1984-03-20T00:00:00.0000000+00:00"
                    }
                ],
                "publications": [
                    {
                        "submissionId": 19920075363,
                        "id": "10df30b390ff4712894ac0d068f1bc74",
                        "publicationName": "Wind Tunnel Modeling Seminar",
                        "publicationDate": "1984-03-20T00:00:00.0000000+00:00"
                    }
                ],
                "status": "CURATED",
                "related": [],
                "downloads": [
                    {
                        "draft": false,
                        "mimetype": "application/pdf",
                        "name": "19920075363.pdf",
                        "type": "STI",
                        "links": {
                            "original": "/api/citations/19920075363/downloads/19920075363.pdf",
                            "pdf": "/api/citations/19920075363/downloads/19920075363.pdf",
                            "fulltext": "/api/citations/19920075363/downloads/19920075363.txt"
                        }
                    }
                ],
                "downloadsAvailable": true
            },
            {
                "_meta": {
                    "score": 0
                },
                "copyright": {
                    "licenseType": "NO",
                    "determinationType": "PUBLIC_USE_PERMITTED",
                    "thirdPartyContentCondition": "NOT_SET"
                },
                "subjectCategories": [
                    "Aerodynamics",
                    "Research and Support Facilities (Air)"
                ],
                "exportControl": {
                    "isExportControl": "NO",
                    "ear": "NO",
                    "itar": "NO"
                },
                "distributionDate": "2019-07-12T00:00:00.0000000+00:00",
                "title": "AWT Acoustics Discussion",
                "stiType": "OTHER",
                "distribution": "PUBLIC",
                "submittedDate": "2013-08-15T16:58:00.0000000+00:00",
                "authorAffiliations": [
                    {
                        "sequence": 0,
                        "submissionId": 19920075371,
                        "meta": {
                            "author": {
                                "name": "Groeneweg, John F."
                            },
                            "organization": {
                                "name": "NASA Glenn Research Center",
                                "location": "Cleveland, OH, United States"
                            }
                        },
                        "id": "cb12b968b6e84b289d5312266e16890f"
                    }
                ],
                "stiTypeDetails": "Other",
                "technicalReviewType": "TECHNICAL_REVIEW_TYPE_NONE",
                "modified": "2018-12-27T00:00:00.0000000+00:00",
                "id": 19920075371,
                "created": "2013-08-15T16:58:00.0000000+00:00",
                "center": {
                    "code": "GRC",
                    "name": "Glenn Research Center",
                    "id": "19eeb25fa404421d9eaa5f876e853e3c"
                },
                "onlyAbstract": false,
                "sensitiveInformation": 2,
                "abstract": "Features required to produce test section acoustic properties which allow the acoustic signature of propulsion systems to be measured are discussed for NASA's Altitude Wind Tunnel. A combination of both analytical and experimental methods are used to identify and reduce background noises as well as critiquing wind tunnel design in terms of acoustic requirements. Acoustic capabilities of the wind tunnel, key personnel, and drawings of microphone locations are presented in viewgraph format.",
                "isLessonsLearned": false,
                "disseminated": "DOCUMENT_AND_METADATA",
                "meetings": [
                    {
                        "country": "United States",
                        "submissionId": 19920075371,
                        "endDate": "1984-03-21T00:00:00.0000000+00:00",
                        "sponsors": [
                            {
                                "meta": {
                                    "organization": {
                                        "name": "NASA Glenn Research Center",
                                        "location": "Cleveland, OH, United States"
                                    }
                                },
                                "meetingId": "4fd5b39a5b52446e8f8b11c8a7ee03f8",
                                "id": "79590591e1e54638b0db8f2a648ec474"
                            }
                        ],
                        "name": "Wind Tunnel Modeling Seminar",
                        "location": "Cleveland, OH",
                        "id": "4fd5b39a5b52446e8f8b11c8a7ee03f8",
                        "startDate": "1984-03-20T00:00:00.0000000+00:00"
                    }
                ],
                "publications": [
                    {
                        "submissionId": 19920075371,
                        "id": "a950434264614d6bae79c502985d78b1",
                        "publicationName": "Wind Tunnel Modeling Seminar",
                        "publicationDate": "1984-03-20T00:00:00.0000000+00:00"
                    }
                ],
                "status": "CURATED",
                "related": [],
                "downloads": [
                    {
                        "draft": false,
                        "mimetype": "application/pdf",
                        "name": "19920075371.pdf",
                        "type": "STI",
                        "links": {
                            "original": "/api/citations/19920075371/downloads/19920075371.pdf",
                            "pdf": "/api/citations/19920075371/downloads/19920075371.pdf",
                            "fulltext": "/api/citations/19920075371/downloads/19920075371.txt"
                        }
                    }
                ],
                "downloadsAvailable": true
            },
            {
                "_meta": {
                    "score": 0
                },
                "copyright": {
                    "licenseType": "NO",
                    "determinationType": "PUBLIC_USE_PERMITTED",
                    "thirdPartyContentCondition": "NOT_SET"
                },
                "subjectCategories": [
                    "Research and Support Facilities (Air)",
                    "Aerodynamics"
                ],
                "exportControl": {
                    "isExportControl": "NO",
                    "ear": "NO",
                    "itar": "NO"
                },
                "distributionDate": "2019-07-12T00:00:00.0000000+00:00",
                "title": "AWT Dynamics and Controls Discussion",
                "stiType": "OTHER",
                "distribution": "PUBLIC",
                "submittedDate": "2013-08-15T16:58:00.0000000+00:00",
                "authorAffiliations": [
                    {
                        "sequence": 0,
                        "submissionId": 19920075372,
                        "meta": {
                            "author": {
                                "name": "Szuch, John R."
                            },
                            "organization": {
                                "name": "NASA Glenn Research Center",
                                "location": "Cleveland, OH, United States"
                            }
                        },
                        "id": "992292c7bdb34578b8147e5940400812"
                    }
                ],
                "stiTypeDetails": "Other",
                "technicalReviewType": "TECHNICAL_REVIEW_TYPE_NONE",
                "modified": "2018-12-27T00:00:00.0000000+00:00",
                "id": 19920075372,
                "created": "2013-08-15T16:58:00.0000000+00:00",
                "center": {
                    "code": "GRC",
                    "name": "Glenn Research Center",
                    "id": "19eeb25fa404421d9eaa5f876e853e3c"
                },
                "onlyAbstract": false,
                "sensitiveInformation": 2,
                "abstract": "An understanding of the process dynamics and interaction of the NASA Altitude Wind Tunnel are discussed. Closed loop control concepts are assessed and verified as well as considering alternative control concepts that may offer improved performance or reliability. A viewgraph format presents the personnel, approach taken in modeling the dynamics and controls, and drawings of various subsystems of the wind tunnel.",
                "isLessonsLearned": false,
                "disseminated": "DOCUMENT_AND_METADATA",
                "meetings": [
                    {
                        "country": "United States",
                        "submissionId": 19920075372,
                        "endDate": "1984-03-21T00:00:00.0000000+00:00",
                        "sponsors": [
                            {
                                "meta": {
                                    "organization": {
                                        "name": "NASA Glenn Research Center",
                                        "location": "Cleveland, OH, United States"
                                    }
                                },
                                "meetingId": "dc7ad65e1b594e2cbf958cc86179a674",
                                "id": "e091ac3bb2f347e7a23abd04c4f51a16"
                            }
                        ],
                        "name": "Wind Tunnel Modeling Seminar",
                        "location": "Cleveland, OH",
                        "id": "dc7ad65e1b594e2cbf958cc86179a674",
                        "startDate": "1984-03-20T00:00:00.0000000+00:00"
                    }
                ],
                "publications": [
                    {
                        "submissionId": 19920075372,
                        "id": "f9b377f8be804110abbefcd6265cdbb8",
                        "publicationName": "Wind Tunnel Modeling Seminar",
                        "publicationDate": "1984-03-20T00:00:00.0000000+00:00"
                    }
                ],
                "status": "CURATED",
                "related": [],
                "downloads": [
                    {
                        "draft": false,
                        "mimetype": "application/pdf",
                        "name": "19920075372.pdf",
                        "type": "STI",
                        "links": {
                            "original": "/api/citations/19920075372/downloads/19920075372.pdf",
                            "pdf": "/api/citations/19920075372/downloads/19920075372.pdf",
                            "fulltext": "/api/citations/19920075372/downloads/19920075372.txt"
                        }
                    }
                ],
                "downloadsAvailable": true
            },
            {
                "_meta": {
                    "score": 0
                },
                "copyright": {
                    "licenseType": "NO",
                    "determinationType": "GOV_PUBLIC_USE_PERMITTED",
                    "thirdPartyContentCondition": "NOT_SET"
                },
                "subjectCategories": [
                    "Aerodynamics"
                ],
                "exportControl": {
                    "isExportControl": "NO",
                    "ear": "NO",
                    "itar": "NO"
                },
                "distributionDate": "2019-06-26T00:00:00.0000000+00:00",
                "otherReportNumbers": [
                    "NACA-TN-543"
                ],
                "title": "The Compressibility Burble",
                "stiType": "OTHER",
                "distribution": "PUBLIC",
                "submittedDate": "2013-09-06T18:19:00.0000000+00:00",
                "authorAffiliations": [
                    {
                        "sequence": 0,
                        "submissionId": 19930081326,
                        "meta": {
                            "author": {
                                "name": "Stack, John"
                            },
                            "organization": {}
                        },
                        "id": "be5cb7d83f24480d8da37bf74a5fc32d"
                    }
                ],
                "stiTypeDetails": "Other - NACA Technical Note",
                "technicalReviewType": "TECHNICAL_REVIEW_TYPE_NONE",
                "modified": "2016-08-05T00:00:00.0000000+00:00",
                "id": 19930081326,
                "created": "2013-09-06T18:19:00.0000000+00:00",
                "center": {
                    "code": "CDMS",
                    "name": "Legacy CDMS",
                    "id": "092d6e0881874968859b972d39a888dc"
                },
                "onlyAbstract": false,
                "sensitiveInformation": 2,
                "abstract": "Simultaneous air-flow photographs and pressure-distribution measurements have been made of the NACA 4412 airfoil at high speeds in order to determine the physical nature of the compressibility burble. The flow photographs were obtained by the Schlieren method and the pressures were simultaneously measured for 54 stations on the 5-inch-chord wing by means of a multiple-tube photographic manometer. Pressure-measurement results and typical Schlieren photographs are presented. The general nature of the phenomenon called the \"compressibility burble\" is shown by these experiments. The source of the increased drag is the compression shock that occurs, the excess drag being due to the conversion of a considerable amount of the air-stream kinetic energy into heat at the compression shock.",
                "isLessonsLearned": false,
                "disseminated": "DOCUMENT_AND_METADATA",
                "publications": [
                    {
                        "submissionId": 19930081326,
                        "id": "3a2484e34411415b9d52a13561c0abbf",
                        "publicationDate": "1935-10-01T00:00:00.0000000+00:00"
                    }
                ],
                "status": "CURATED",
                "related": [],
                "downloads": [
                    {
                        "draft": false,
                        "mimetype": "application/pdf",
                        "name": "19930081326.pdf",
                        "type": "STI",
                        "links": {
                            "original": "/api/citations/19930081326/downloads/19930081326.pdf",
                            "pdf": "/api/citations/19930081326/downloads/19930081326.pdf",
                            "fulltext": "/api/citations/19930081326/downloads/19930081326.txt"
                        }
                    }
                ],
                "downloadsAvailable": true
            },
            {
                "_meta": {
                    "score": 0
                },
                "copyright": {
                    "licenseType": "NO",
                    "determinationType": "GOV_PUBLIC_USE_PERMITTED",
                    "thirdPartyContentCondition": "NOT_SET"
                },
                "subjectCategories": [
                    "Aerodynamics"
                ],
                "keywords": [
                    "LIFT COEFFICIENTS - AIRFOILS - NACA 230",
                    "MACH NUMBER",
                    "WIND TUNNEL TESTS - NACA HIGH-SPEED (16') WORK CARRIED ON AT LAL",
                    "WIND TUNNEL TESTS - NACA - PRESSURE (19') WORK CARRIED  ON AT LAL",
                    "PRESSURE DISTRIBUTION - AIRFOILS - NACA 230 CHORDWISE",
                    "REYNOLDS NUMBER",
                    "AIRFOILS - NACA 230 - CHARACTERISTICS WING FLAPS, SPLIT",
                    "WING FLAPS, SPLIT - FULL-SPAN VS  PARTIAL-SPAN"
                ],
                "exportControl": {
                    "isExportControl": "NO",
                    "ear": "NO",
                    "itar": "NO"
                },
                "distributionDate": "2019-06-26T00:00:00.0000000+00:00",
                "otherReportNumbers": [
                    "NACA-TN-1299"
                ],
                "title": "Effects of Mach Number and Reynolds Number on the Maximum Lift Coefficient of a Wing of NACA 230-series Airfoil Sections",
                "stiType": "OTHER",
                "distribution": "PUBLIC",
                "submittedDate": "2013-08-16T03:39:00.0000000+00:00",
                "authorAffiliations": [
                    {
                        "sequence": 0,
                        "submissionId": 19930081927,
                        "meta": {
                            "author": {
                                "name": "Furlong, G. Chester"
                            },
                            "organization": {
                                "name": "National Advisory Committee for Aeronautics. Langley Aeronautical Lab.",
                                "location": "Langley Field, VA, United States"
                            }
                        },
                        "id": "b77d3a3e180446939200ef903a2df7e9"
                    },
                    {
                        "sequence": 1,
                        "submissionId": 19930081927,
                        "meta": {
                            "author": {
                                "name": "Fitzpatrick, James E."
                            },
                            "organization": {
                                "name": "National Advisory Committee for Aeronautics. Langley Aeronautical Lab.",
                                "location": "Langley Field, VA, United States"
                            }
                        },
                        "id": "911fc4b4d7f442f2a33d5ddde03b2275"
                    }
                ],
                "stiTypeDetails": "Other - NACA Technical Note",
                "technicalReviewType": "TECHNICAL_REVIEW_TYPE_NONE",
                "modified": "2014-07-14T00:00:00.0000000+00:00",
                "id": 19930081927,
                "sourceIdentifiers": [
                    {
                        "number": "hdl:100.2/ADA800630",
                        "type": "HANDLE"
                    }
                ],
                "created": "2013-08-16T03:39:00.0000000+00:00",
                "center": {
                    "code": "CDMS",
                    "name": "Legacy CDMS",
                    "id": "092d6e0881874968859b972d39a888dc"
                },
                "onlyAbstract": false,
                "sensitiveInformation": 2,
                "abstract": "Wing was tested with full-span, partial-span, or split flaps deflected 60 Degrees and without flaps. Chordwise pressure-distribution measurements were made for all flap configurations.. Peak values of maximum lift coefficient were obtained at relatively low free-stream Mach numbers and, before critical Mach number was reached, were almost entirely dependent on Reynolds Number. Lift coefficient increased by increasing Mach number or deflecting flaps while critical pressure coefficient was reached at lower free-stream Mach numbers.",
                "isLessonsLearned": false,
                "disseminated": "DOCUMENT_AND_METADATA",
                "publications": [
                    {
                        "submissionId": 19930081927,
                        "id": "5adb371d21dc42b6a1e167e0dd7f789f",
                        "publicationDate": "1947-05-01T00:00:00.0000000+00:00"
                    }
                ],
                "status": "CURATED",
                "related": [],
                "downloads": [
                    {
                        "draft": false,
                        "mimetype": "application/pdf",
                        "name": "19930081927.pdf",
                        "type": "STI",
                        "links": {
                            "original": "/api/citations/19930081927/downloads/19930081927.pdf",
                            "pdf": "/api/citations/19930081927/downloads/19930081927.pdf",
                            "fulltext": "/api/citations/19930081927/downloads/19930081927.txt"
                        }
                    }
                ],
                "downloadsAvailable": true
            },
            {
                "_meta": {
                    "score": 0
                },
                "copyright": {
                    "licenseType": "NO",
                    "determinationType": "GOV_PUBLIC_USE_PERMITTED",
                    "thirdPartyContentCondition": "NOT_SET"
                },
                "subjectCategories": [
                    "Aerodynamics"
                ],
                "keywords": [
                    "PRESSURE DISTRIBUTION - BODIES OF REVOLUTION",
                    "THEORIES - FLOW - CHARACTERISTICS",
                    "BODIES - FINENESS RATIO",
                    "BODIES OF REVOLUTION - DRAG",
                    "THEORIES - SIMILITUDE",
                    "THEORIES - FLOW - HYPERSONIC"
                ],
                "exportControl": {
                    "isExportControl": "NO",
                    "ear": "NO",
                    "itar": "NO"
                },
                "distributionDate": "2019-06-26T00:00:00.0000000+00:00",
                "otherReportNumbers": [
                    "NACA-TN-2250"
                ],
                "title": "An Analysis of the Applicability of the Hypersonic Similarity Law to the Study of Flow About Bodies of Revolution at Zero Angle of Attack",
                "stiType": "OTHER",
                "distribution": "PUBLIC",
                "submittedDate": "2013-08-16T03:44:00.0000000+00:00",
                "authorAffiliations": [
                    {
                        "sequence": 0,
                        "submissionId": 19930082890,
                        "meta": {
                            "author": {
                                "name": "Ehret, Dorris M."
                            },
                            "organization": {
                                "name": "National Advisory Committee for Aeronautics. Ames Aeronautical Lab.",
                                "location": "Moffett Field, CA, United States"
                            }
                        },
                        "id": "9770a97773914427aa850d491c568a05"
                    },
                    {
                        "sequence": 1,
                        "submissionId": 19930082890,
                        "meta": {
                            "author": {
                                "name": "Rossow, Vernon J."
                            },
                            "organization": {
                                "name": "National Advisory Committee for Aeronautics. Ames Aeronautical Lab.",
                                "location": "Moffett Field, CA, United States"
                            }
                        },
                        "id": "92442d3787b74bd790ba5d70ab7f4b07"
                    },
                    {
                        "sequence": 2,
                        "submissionId": 19930082890,
                        "meta": {
                            "author": {
                                "name": "Stevens, Victor I."
                            },
                            "organization": {
                                "name": "National Advisory Committee for Aeronautics. Ames Aeronautical Lab.",
                                "location": "Moffett Field, CA, United States"
                            }
                        },
                        "id": "1ab09636087c49e8b09d31e67609c95e"
                    }
                ],
                "stiTypeDetails": "Other - NACA Technical Note",
                "technicalReviewType": "TECHNICAL_REVIEW_TYPE_NONE",
                "modified": "2017-07-19T00:00:00.0000000+00:00",
                "id": 19930082890,
                "created": "2013-08-16T03:44:00.0000000+00:00",
                "center": {
                    "code": "ARC",
                    "name": "Ames Research Center",
                    "id": "4540cd94d24c4bf29f8773a27faf96b2"
                },
                "onlyAbstract": false,
                "sensitiveInformation": 2,
                "abstract": "The hypersonic similarity law as derived by Tsien has been investigated by comparing the pressure distributions along bodies of revolution at zero angle of attack. In making these comparisons, particular attention was given to determining the limits of Mach number and fineness ratio for which the similarity law applies. For the purpose of this investigation, pressure distributions determined by the method of characteristics for ogive cylinders for values of Mach numbers and fineness ratios varying from 1.5 to 12 were compared. Pressures on various cones and on cone cylinders were also compared in this study. The pressure distributions presented demonstrate that the hypersonic similarity law is applicable over a wider range of values of Mach numbers and fineness ratios than might be expected from the assumptions made in the derivation. This is significant since within the range of applicability of the law a single pressure distribution exists for all similarly shaped bodies for which the ratio of free-stream Mach number to fineness ratio is constant. Charts are presented for rapid determination of pressure distributions over ogive cylinders for any combination of Mach number and fineness ratio within defined limits.",
                "isLessonsLearned": false,
                "disseminated": "DOCUMENT_AND_METADATA",
                "publications": [
                    {
                        "submissionId": 19930082890,
                        "id": "9f3f164699194dafa896165bf3ab20dd",
                        "publicationDate": "1950-12-01T00:00:00.0000000+00:00"
                    }
                ],
                "status": "CURATED",
                "related": [],
                "downloads": [
                    {
                        "draft": false,
                        "mimetype": "application/pdf",
                        "name": "19930082890.pdf",
                        "type": "STI",
                        "links": {
                            "original": "/api/citations/19930082890/downloads/19930082890.pdf",
                            "pdf": "/api/citations/19930082890/downloads/19930082890.pdf",
                            "fulltext": "/api/citations/19930082890/downloads/19930082890.txt"
                        }
                    }
                ],
                "downloadsAvailable": true
            },
            {
                "_meta": {
                    "score": 0
                },
                "copyright": {
                    "licenseType": "NO",
                    "determinationType": "GOV_PUBLIC_USE_PERMITTED",
                    "thirdPartyContentCondition": "NOT_SET"
                },
                "subjectCategories": [
                    "Aerodynamics"
                ],
                "keywords": [
                    "DIFFUSERS, SUPERSONIC",
                    "AIR INLETS - NOSE, ANNULAR",
                    "BODIES, DUCTED NOSE SHAPE"
                ],
                "exportControl": {
                    "isExportControl": "NO",
                    "ear": "NO",
                    "itar": "NO"
                },
                "distributionDate": "2019-06-26T00:00:00.0000000+00:00",
                "otherReportNumbers": [
                    "NACA-TN-2286"
                ],
                "title": "Preliminary Investigation of a New Type of Supersonic Inlet",
                "stiType": "OTHER",
                "distribution": "PUBLIC",
                "submittedDate": "2013-08-16T03:45:00.0000000+00:00",
                "authorAffiliations": [
                    {
                        "sequence": 0,
                        "submissionId": 19930083137,
                        "meta": {
                            "author": {
                                "name": "Ferri, Antonio"
                            },
                            "organization": {
                                "name": "National Advisory Committee for Aeronautics. Langley Aeronautical Lab.",
                                "location": "Langley Field, VA, United States"
                            }
                        },
                        "id": "51a69bd44bcc4676907b6a778f8793d6"
                    },
                    {
                        "sequence": 1,
                        "submissionId": 19930083137,
                        "meta": {
                            "author": {
                                "name": "Nucci, Louis M"
                            },
                            "organization": {
                                "name": "National Advisory Committee for Aeronautics. Langley Aeronautical Lab.",
                                "location": "Langley Field, VA, United States"
                            }
                        },
                        "id": "277b81d4968b4c8585cf5a73f1ab5f56"
                    }
                ],
                "stiTypeDetails": "Other - NACA Technical Note",
                "technicalReviewType": "TECHNICAL_REVIEW_TYPE_NONE",
                "modified": "2014-07-14T00:00:00.0000000+00:00",
                "id": 19930083137,
                "created": "2013-08-16T03:45:00.0000000+00:00",
                "center": {
                    "code": "CDMS",
                    "name": "Legacy CDMS",
                    "id": "092d6e0881874968859b972d39a888dc"
                },
                "onlyAbstract": false,
                "sensitiveInformation": 2,
                "abstract": "A supersonic inlet with supersonic deceleration of the flow entirely outside of the inlet is considered. A particular arrangement with fixed geometry having a central body with a circular annular intake is analyzed, and it is shown theoretically that this arrangement gives high pressure recovery for a large range of Mach number and mass flow and therefore is practical for use on supersonic airplanes and missiles. For some Mach numbers the drag coefficient for this type of inlet is larger than the drag coefficient for the type of inlet with supersonic compression entirely inside, but the pressure recovery is larger for all flight conditions. The differences in drag can be eliminated for the design Mach number. Experimental results confirm the results of the theoretical analysis and show that pressure recoveries of 95 percent for Mach numbers of 1.33 and 1.52, 92 percent for a Mach number of 1.72, and 86 percent for a Mach number of 2.10 are possible, with the configurations considered. If the mass flow decreases, the total drag coefficient increases gradually and the pressure recovery does not change appreciably. The results of this work were first presented in a classified document issued in 1946.",
                "isLessonsLearned": false,
                "disseminated": "DOCUMENT_AND_METADATA",
                "publications": [
                    {
                        "submissionId": 19930083137,
                        "id": "91c7dda22d414f38bc918bbeb43cf1aa",
                        "publicationDate": "1951-04-01T00:00:00.0000000+00:00"
                    }
                ],
                "status": "CURATED",
                "related": [],
                "downloads": [
                    {
                        "draft": false,
                        "mimetype": "application/pdf",
                        "name": "19930083137.pdf",
                        "type": "STI",
                        "links": {
                            "original": "/api/citations/19930083137/downloads/19930083137.pdf",
                            "pdf": "/api/citations/19930083137/downloads/19930083137.pdf",
                            "fulltext": "/api/citations/19930083137/downloads/19930083137.txt"
                        }
                    }
                ],
                "downloadsAvailable": true
            },
            {
                "_meta": {
                    "score": 0
                },
                "copyright": {
                    "licenseType": "NO",
                    "determinationType": "GOV_PUBLIC_USE_PERMITTED",
                    "thirdPartyContentCondition": "NOT_SET"
                },
                "subjectCategories": [
                    "Aerodynamics"
                ],
                "exportControl": {
                    "isExportControl": "NO",
                    "ear": "NO",
                    "itar": "NO"
                },
                "distributionDate": "2019-06-26T00:00:00.0000000+00:00",
                "otherReportNumbers": [
                    "NACA-TN-4120"
                ],
                "title": "Theoretical Calculations of Supersonic Wave Drag at Zero Lift for a Particular Store Arrangement",
                "stiType": "OTHER",
                "distribution": "PUBLIC",
                "submittedDate": "2013-08-16T03:53:00.0000000+00:00",
                "authorAffiliations": [
                    {
                        "sequence": 0,
                        "submissionId": 19930084830,
                        "meta": {
                            "author": {
                                "name": "Margolis, Kenneth"
                            },
                            "organization": {
                                "name": "National Advisory Committee for Aeronautics. Langley Aeronautical Lab.",
                                "location": "Langley Field, VA, United States"
                            }
                        },
                        "id": "dcc0e1b2aa024ce0a0332d54f389173d"
                    },
                    {
                        "sequence": 1,
                        "submissionId": 19930084830,
                        "meta": {
                            "author": {
                                "name": "Malvestuto, Frank S , Jr"
                            },
                            "organization": {
                                "name": "National Advisory Committee for Aeronautics. Langley Aeronautical Lab.",
                                "location": "Langley Field, VA, United States"
                            }
                        },
                        "id": "b0fc42074c38438d88a0098e1d6ef745"
                    },
                    {
                        "sequence": 2,
                        "submissionId": 19930084830,
                        "meta": {
                            "author": {
                                "name": "Maxie, Peter J , Jr"
                            },
                            "organization": {
                                "name": "National Advisory Committee for Aeronautics. Langley Aeronautical Lab.",
                                "location": "Langley Field, VA, United States"
                            }
                        },
                        "id": "0e1c4e2ba286447eaa2f1bb7e2791500"
                    }
                ],
                "stiTypeDetails": "Other - NACA Technical Note",
                "technicalReviewType": "TECHNICAL_REVIEW_TYPE_NONE",
                "modified": "2014-07-14T00:00:00.0000000+00:00",
                "id": 19930084830,
                "created": "2013-08-16T03:53:00.0000000+00:00",
                "center": {
                    "code": "CDMS",
                    "name": "Legacy CDMS",
                    "id": "092d6e0881874968859b972d39a888dc"
                },
                "onlyAbstract": false,
                "sensitiveInformation": 2,
                "abstract": "An analysis, based on the linearized thin-airfoil theory for supersonic speeds, of the wave drag at zero lift has been carried out for a simple two-body arrangement consisting of two wedgelike surfaces, each with a rhombic lateral cross section and emanating from a common apex. Such an arrangement could be used as two stores, either embedded within or mounted below a wing, or as auxiliary bodies wherein the upper halves could be used as stores and the lower halves for bomb or missile purposes. The complete range of supersonic Mach numbers has been considered and it was found that by orienting the axes of the bodies relative to each other a given volume may be redistributed in a manner which enables the wave drag to be reduced within the lower supersonic speed range (where the leading edge is substantially subsonic).  At the higher Mach numbers, the wave drag is always increased. If, in addition to a constant volume, a given maximum thickness-chord ratio is imposed, then canting the two surfaces results in higher wave drag at all Mach numbers. For purposes of comparison, analogous drag calculations for the case of two parallel winglike bodies with the same cross-sectional shapes as the canted configuration have been included. Consideration is also given to the favorable (dragwise) interference pressures acting on the blunt bases of both arrangements.",
                "isLessonsLearned": false,
                "disseminated": "DOCUMENT_AND_METADATA",
                "publications": [
                    {
                        "submissionId": 19930084830,
                        "id": "faffb9242188428c9327a7b4b7b3f90f",
                        "publicationDate": "1958-01-01T00:00:00.0000000+00:00"
                    }
                ],
                "status": "CURATED",
                "related": [],
                "downloads": [
                    {
                        "draft": false,
                        "mimetype": "application/pdf",
                        "name": "19930084830.pdf",
                        "type": "STI",
                        "links": {
                            "original": "/api/citations/19930084830/downloads/19930084830.pdf",
                            "pdf": "/api/citations/19930084830/downloads/19930084830.pdf",
                            "fulltext": "/api/citations/19930084830/downloads/19930084830.txt"
                        }
                    }
                ],
                "downloadsAvailable": true
            },
            {
                "_meta": {
                    "score": 0
                },
                "copyright": {
                    "licenseType": "NO",
                    "determinationType": "GOV_PUBLIC_USE_PERMITTED",
                    "thirdPartyContentCondition": "NOT_SET"
                },
                "subjectCategories": [
                    "Aerodynamics"
                ],
                "exportControl": {
                    "isExportControl": "NO",
                    "ear": "NO",
                    "itar": "NO"
                },
                "distributionDate": "2019-06-26T00:00:00.0000000+00:00",
                "otherReportNumbers": [
                    "NACA-TN-2888"
                ],
                "title": "Performance Characteristics of Plane-Wall Two-Dimensional Diffusers",
                "stiType": "OTHER",
                "distribution": "PUBLIC",
                "submittedDate": "2013-08-16T03:48:00.0000000+00:00",
                "authorAffiliations": [
                    {
                        "sequence": 0,
                        "submissionId": 19930083792,
                        "meta": {
                            "author": {
                                "name": "Reid, Elliott G"
                            },
                            "organization": {
                                "name": "Stanford Univ.",
                                "location": "Palo Alto, CA, United States"
                            }
                        },
                        "id": "b6c4f2a441fd42c0b6988b2623c2017a"
                    }
                ],
                "stiTypeDetails": "Other - NACA Technical Note",
                "technicalReviewType": "TECHNICAL_REVIEW_TYPE_NONE",
                "modified": "2014-07-14T00:00:00.0000000+00:00",
                "id": 19930083792,
                "created": "2013-08-16T03:48:00.0000000+00:00",
                "center": {
                    "code": "CDMS",
                    "name": "Legacy CDMS",
                    "id": "092d6e0881874968859b972d39a888dc"
                },
                "onlyAbstract": false,
                "sensitiveInformation": 2,
                "abstract": "Experiments have been made at Stanford University to determine the performance characteristics of plane-wall, two-dimensional diffusers which were so proportioned as to insure reasonable approximation of two-dimensional flow. All of the diffusers had identical entrance cross sections and discharged directly into a large plenum chamber; the test program included wide variations of divergence angle and length. During all tests a dynamic pressure of 60 pounds per square foOt was maintained at the diffuser entrance and the boundary layer there was thin and fully turbulent. The most interesting flow characteristics observed were the occasional appearance of steady, unseparated, asymmetric flow - which was correlated with the boundary-layer coalescence - and the rapid deterioration of flow steadiness - which occurred as soon as the divergence angle for maximum static pressure recovery was exceeded. Pressure efficiency was found to be controlled almost exclusively by divergence angle, whereas static pressure recovery was markedly influenced by area ratio (or length) as well as divergence angle. Volumetric efficiency. diminished as area ratio increased, and at a greater rate with small lengths than with large ones. Large values of the static-pressure-recovery coefficient were attained only with long diffusers of large area ratio; under these conditions pressure efficiency was high and. volumetric efficiency low. Auxiliary tests with asymmetric diffusers demonstrated that longitudinal pressure gradient, rather than wall divergence angle, controlled flow separation. Others showed that the addition of even a short exit duct of uniform section augmented pressure recovery. Finally, it was found that the installation of a thin, central, longitudinal partition suppressed flow separation in short diffusers and thereby improved pressure recovery",
                "isLessonsLearned": false,
                "disseminated": "DOCUMENT_AND_METADATA",
                "publications": [
                    {
                        "submissionId": 19930083792,
                        "id": "ff5224c5e00c47ea948d0adbd126d3f3",
                        "publicationDate": "1953-02-01T00:00:00.0000000+00:00"
                    }
                ],
                "status": "CURATED",
                "related": [],
                "downloads": [
                    {
                        "draft": false,
                        "mimetype": "application/pdf",
                        "name": "19930083792.pdf",
                        "type": "STI",
                        "links": {
                            "original": "/api/citations/19930083792/downloads/19930083792.pdf",
                            "pdf": "/api/citations/19930083792/downloads/19930083792.pdf",
                            "fulltext": "/api/citations/19930083792/downloads/19930083792.txt"
                        }
                    }
                ],
                "downloadsAvailable": true
            },
            {
                "_meta": {
                    "score": 0
                },
                "copyright": {
                    "licenseType": "NO",
                    "determinationType": "GOV_PUBLIC_USE_PERMITTED",
                    "thirdPartyContentCondition": "NOT_SET"
                },
                "subjectCategories": [
                    "Aerodynamics"
                ],
                "exportControl": {
                    "isExportControl": "NO",
                    "ear": "NO",
                    "itar": "NO"
                },
                "distributionDate": "2019-08-12T00:00:00.0000000+00:00",
                "otherReportNumbers": [
                    "NACA-TN-2891"
                ],
                "title": "Factors Affecting Laminar Boundary Layer Measurements in a Supersonic Stream",
                "stiType": "OTHER",
                "distribution": "PUBLIC",
                "submittedDate": "2013-08-16T03:48:00.0000000+00:00",
                "authorAffiliations": [
                    {
                        "sequence": 0,
                        "submissionId": 19930083810,
                        "meta": {
                            "author": {
                                "name": "Blue, Robert E"
                            },
                            "organization": {
                                "name": "National Advisory Committee for Aeronautics. Lewis Flight Propulsion Lab.",
                                "location": "Cleveland, OH, United States"
                            }
                        },
                        "id": "1d7d930a8e154f47801913ac5cdf0734"
                    },
                    {
                        "sequence": 1,
                        "submissionId": 19930083810,
                        "meta": {
                            "author": {
                                "name": "Low, George M"
                            },
                            "organization": {
                                "name": "National Advisory Committee for Aeronautics. Lewis Flight Propulsion Lab.",
                                "location": "Cleveland, OH, United States"
                            }
                        },
                        "id": "f4d44c44d8b24f6fb042bb0d38ec1147"
                    }
                ],
                "stiTypeDetails": "Other - NACA Technical Note",
                "technicalReviewType": "TECHNICAL_REVIEW_TYPE_NONE",
                "modified": "2019-04-25T00:00:00.0000000+00:00",
                "id": 19930083810,
                "created": "2013-08-16T03:48:00.0000000+00:00",
                "center": {
                    "code": "HQ",
                    "name": "Headquarters",
                    "id": "f0865a34ba1f474d865ab51f212fc69f"
                },
                "onlyAbstract": false,
                "sensitiveInformation": 2,
                "abstract": "The observed discrepancy at supersonic speeds between theoretical and apparent experimental average flat plate friction-drag coefficients calculated from boundary layer total-pressure surveys was investigated. Effects of the total-pressure probe, heat transfer through the leading edge region, change in leading-edge radius and strength of the leading-edge wave, possible early transition to  turbulent flow or “bursts of turbulence,” and the slight stream-wise pressure gradient inherent in flat plate flow were investigated for plates with very sharp leading edges. Only one of these factors, the effect of the total-pressure probe, was found to be significant. Total-pressure probes of different tip heights, when placed in laminar boundary layers developing under identical conditions, were found to yield different values of friction drag coefficient. Extrapolation of these measurements indicates that a probe of vanishing size would yield the theoretical predicted values of average flat plate friction-drag coefficients. A correlation describing the relation between the friction-drag discrepancy and the probe tip height is presented.",
                "isLessonsLearned": false,
                "disseminated": "DOCUMENT_AND_METADATA",
                "publications": [
                    {
                        "submissionId": 19930083810,
                        "id": "4ffee4dd673342348cf0609e073d4016",
                        "publicationDate": "1953-02-01T00:00:00.0000000+00:00"
                    }
                ],
                "status": "CURATED",
                "related": [],
                "downloads": [
                    {
                        "draft": false,
                        "mimetype": "application/pdf",
                        "name": "19930083810.pdf",
                        "type": "STI",
                        "links": {
                            "original": "/api/citations/19930083810/downloads/19930083810.pdf",
                            "pdf": "/api/citations/19930083810/downloads/19930083810.pdf",
                            "fulltext": "/api/citations/19930083810/downloads/19930083810.txt"
                        }
                    }
                ],
                "downloadsAvailable": true
            },
            {
                "_meta": {
                    "score": 0
                },
                "copyright": {
                    "licenseType": "NO",
                    "determinationType": "GOV_PUBLIC_USE_PERMITTED",
                    "thirdPartyContentCondition": "NOT_SET"
                },
                "subjectCategories": [
                    "Aerodynamics"
                ],
                "exportControl": {
                    "isExportControl": "NO",
                    "ear": "NO",
                    "itar": "NO"
                },
                "distributionDate": "2019-06-26T00:00:00.0000000+00:00",
                "otherReportNumbers": [
                    "NACA-RM-L6L09"
                ],
                "title": "Observations on an Aileron-Flutter Instability Encountered on a 45 Degree Swept-Back Wing in Transonic and Supersonic Flight",
                "stiType": "OTHER",
                "distribution": "PUBLIC",
                "submittedDate": "2013-08-16T03:58:00.0000000+00:00",
                "authorAffiliations": [
                    {
                        "sequence": 0,
                        "submissionId": 19930085761,
                        "meta": {
                            "author": {
                                "name": "Pitkin, Marvin"
                            },
                            "organization": {
                                "name": "National Advisory Committee for Aeronautics. Langley Aeronautical Lab.",
                                "location": "Langley Field, VA, United States"
                            }
                        },
                        "id": "7b46deb6cd3a481c8ee2301745cb854d"
                    },
                    {
                        "sequence": 1,
                        "submissionId": 19930085761,
                        "meta": {
                            "author": {
                                "name": "Gardner, William N."
                            },
                            "organization": {
                                "name": "National Advisory Committee for Aeronautics. Langley Aeronautical Lab.",
                                "location": "Langley Field, VA, United States"
                            }
                        },
                        "id": "190bb7ae46c448409f242cb9f10a2f5c"
                    },
                    {
                        "sequence": 2,
                        "submissionId": 19930085761,
                        "meta": {
                            "author": {
                                "name": "Curfman, Howard J., Jr"
                            },
                            "organization": {
                                "name": "National Advisory Committee for Aeronautics. Langley Aeronautical Lab.",
                                "location": "Langley Field, VA, United States"
                            }
                        },
                        "id": "b8908545118f47d983f8b6fa5567aef8"
                    }
                ],
                "stiTypeDetails": "Other - NACA Research Memorandum",
                "technicalReviewType": "TECHNICAL_REVIEW_TYPE_NONE",
                "modified": "2018-02-21T00:00:00.0000000+00:00",
                "id": 19930085761,
                "created": "2013-08-16T03:58:00.0000000+00:00",
                "center": {
                    "code": "CDMS",
                    "name": "Legacy CDMS",
                    "id": "092d6e0881874968859b972d39a888dc"
                },
                "onlyAbstract": false,
                "sensitiveInformation": 2,
                "abstract": "In the course of a flight test of a supersonic research pilotless aircraft (the NACA RM-1), large-amplitude aileron oscillations, probably aileron compressibility flutter, were encountered in the transonic and supersonic speed ranges. The wing was oscillating at the same frequency as the aileron. The aircraft was equipped with 45 degree swept-back wings of symmetrical NASA 65-010 airfoil section. Completely mass-balanced ailerons with 20 degree beveled trailing edges were installed on the wings. The ailerons were free floating with no mechanical restraining force other than the friction of the aileron hinges and servomechanism bearings throughout the high-speed interval of flight.",
                "isLessonsLearned": false,
                "disseminated": "DOCUMENT_AND_METADATA",
                "publications": [
                    {
                        "submissionId": 19930085761,
                        "id": "340ce161bbf0456e81a45402cfad63ba",
                        "publicationDate": "1947-04-11T00:00:00.0000000+00:00"
                    }
                ],
                "status": "CURATED",
                "related": [],
                "downloads": [
                    {
                        "draft": false,
                        "mimetype": "application/pdf",
                        "name": "19930085761.pdf",
                        "type": "STI",
                        "links": {
                            "original": "/api/citations/19930085761/downloads/19930085761.pdf",
                            "pdf": "/api/citations/19930085761/downloads/19930085761.pdf",
                            "fulltext": "/api/citations/19930085761/downloads/19930085761.txt"
                        }
                    }
                ],
                "downloadsAvailable": true
            },
            {
                "_meta": {
                    "score": 0
                },
                "copyright": {
                    "licenseType": "NO",
                    "determinationType": "GOV_PUBLIC_USE_PERMITTED",
                    "thirdPartyContentCondition": "NOT_SET"
                },
                "subjectCategories": [
                    "Aerodynamics"
                ],
                "exportControl": {
                    "isExportControl": "NO",
                    "ear": "NO",
                    "itar": "NO"
                },
                "distributionDate": "2019-06-26T00:00:00.0000000+00:00",
                "otherReportNumbers": [
                    "NACA-RM-E7G23"
                ],
                "title": "Investigation of Thrust Augmentation of a 1600-pound Thrust Centrifugal-flow-type Turbojet Engine by Injection of Refrigerants at Compressor Inlets",
                "stiType": "OTHER",
                "distribution": "PUBLIC",
                "submittedDate": "2013-08-16T03:58:00.0000000+00:00",
                "authorAffiliations": [
                    {
                        "sequence": 0,
                        "submissionId": 19930085811,
                        "meta": {
                            "author": {
                                "name": "Jones, William L."
                            },
                            "organization": {
                                "name": "National Advisory Committee for Aeronautics. Lewis Flight Propulsion Lab.",
                                "location": "Cleveland, OH, United States"
                            }
                        },
                        "id": "ea9d353601004dd1bdac78ba8147b4b7"
                    },
                    {
                        "sequence": 1,
                        "submissionId": 19930085811,
                        "meta": {
                            "author": {
                                "name": "Dowman, Harry W."
                            },
                            "organization": {
                                "name": "National Advisory Committee for Aeronautics. Lewis Flight Propulsion Lab.",
                                "location": "Cleveland, OH, United States"
                            }
                        },
                        "id": "3b12a5397b73447bb784c28a292b141d"
                    }
                ],
                "stiTypeDetails": "Other - NACA Research Memorandum",
                "technicalReviewType": "TECHNICAL_REVIEW_TYPE_NONE",
                "modified": "2014-07-14T00:00:00.0000000+00:00",
                "id": 19930085811,
                "sourceIdentifiers": [
                    {
                        "number": "hdl:100.2/ADA800633",
                        "type": "HANDLE"
                    }
                ],
                "created": "2013-08-16T03:58:00.0000000+00:00",
                "center": {
                    "code": "CDMS",
                    "name": "Legacy CDMS",
                    "id": "092d6e0881874968859b972d39a888dc"
                },
                "onlyAbstract": false,
                "sensitiveInformation": 2,
                "abstract": "Investigations were conducted to determine effectiveness of refrigerants in increasing thrust of turbojet engines. Mixtures of water an alcohol were injected for a range of total flows up to 2.2 lb/sec. Kerosene was injected into inlets covering a range of injected flows up to approximately 30% of normal engine fuel flow. Injection of 2.0 lb/sec of water alone produced an increase in thrust of 35.8% of rate engine conditions and kerosene produced a negligible increase in thrust. Carbon dioxide increased thrust 23.5 percent.",
                "isLessonsLearned": false,
                "disseminated": "DOCUMENT_AND_METADATA",
                "publications": [
                    {
                        "submissionId": 19930085811,
                        "id": "503420835ad64d099db4fe8e682685eb",
                        "publicationDate": "1947-08-25T00:00:00.0000000+00:00"
                    }
                ],
                "status": "CURATED",
                "related": [],
                "downloads": [
                    {
                        "draft": false,
                        "mimetype": "application/pdf",
                        "name": "19930085811.pdf",
                        "type": "STI",
                        "links": {
                            "original": "/api/citations/19930085811/downloads/19930085811.pdf",
                            "pdf": "/api/citations/19930085811/downloads/19930085811.pdf",
                            "fulltext": "/api/citations/19930085811/downloads/19930085811.txt"
                        }
                    }
                ],
                "downloadsAvailable": true
            },
            {
                "_meta": {
                    "score": 0
                },
                "copyright": {
                    "licenseType": "NO",
                    "determinationType": "GOV_PUBLIC_USE_PERMITTED",
                    "thirdPartyContentCondition": "NOT_SET"
                },
                "subjectCategories": [
                    "Aerodynamics"
                ],
                "exportControl": {
                    "isExportControl": "NO",
                    "ear": "NO",
                    "itar": "NO"
                },
                "distributionDate": "2019-08-13T14:50:12.1700000+00:00",
                "otherReportNumbers": [
                    "NACA-RM-L52H05"
                ],
                "title": "The Use of the Rolled-up Vortex Concept for Predicting Wing-tail Interference and Comparison with Experiment at Mach Number of 1.62 for a Series of Missile Configurations Having Tandem Cruciform Lifting Surfaces",
                "stiType": "OTHER",
                "distribution": "PUBLIC",
                "submittedDate": "2013-08-16T04:08:00.0000000+00:00",
                "authorAffiliations": [
                    {
                        "sequence": 0,
                        "submissionId": 19930087562,
                        "meta": {
                            "author": {
                                "name": "Grigsby, Carl E"
                            },
                            "organization": {}
                        },
                        "id": "0c187046998243cb907c69547c8c5b98"
                    }
                ],
                "stiTypeDetails": "Other - NACA Research Memorandum",
                "technicalReviewType": "TECHNICAL_REVIEW_TYPE_NONE",
                "modified": "2016-09-12T00:00:00.0000000+00:00",
                "id": 19930087562,
                "created": "2013-08-16T04:08:00.0000000+00:00",
                "center": {
                    "code": "HQ",
                    "name": "Headquarters",
                    "id": "f0865a34ba1f474d865ab51f212fc69f"
                },
                "onlyAbstract": false,
                "sensitiveInformation": 2,
                "abstract": "The method for predicting wing- tail interference whereby the trailing vortex system behind lifting wings is replaced by fully rolled-up vortices has been applied to the calculation of tail efficiency parameters, lift characteristics, and center -of-pressure locations for a series of generalized missile configurations. The calculations have been carried out with assumed and experimental vortex locations, and comparisons made with experimental data. The measured spanwise locations of the vortices for the inline case were found to be in good agreement with the asymptotic values computed from the center of gravity of the vorticity using the method of Lagerstrom and Graham. For the interdigitated configurations the measured spanwise locations were in only fair agreement with the asymptotic locations computed for the inline case. The vertical displacement of the vortices with angle of attack for both inline and interdigitated configurations was small. The method utilizing the rolled -up vortex concept was shown to give good results in the prediction of tail efficiency variations with angle of attack for inline configurations. Not as good correlation with experiment was shown for the interdigitated configurations. Complete configuration lift -curve slopes and center -of-pressure locations, obtained using t ail efficiency calculations together with the characteristics of the components obtained from available theoretical methods, showed excellent correlation with experimental results.",
                "isLessonsLearned": false,
                "disseminated": "DOCUMENT_AND_METADATA",
                "publications": [
                    {
                        "submissionId": 19930087562,
                        "id": "8c7769c98c81448da16c3a51352447bb",
                        "publicationDate": "1952-09-24T00:00:00.0000000+00:00"
                    }
                ],
                "status": "CURATED",
                "related": [],
                "downloads": [
                    {
                        "draft": false,
                        "mimetype": "application/pdf",
                        "name": "19930087562.pdf",
                        "type": "STI",
                        "links": {
                            "original": "/api/citations/19930087562/downloads/19930087562.pdf",
                            "pdf": "/api/citations/19930087562/downloads/19930087562.pdf",
                            "fulltext": "/api/citations/19930087562/downloads/19930087562.txt"
                        }
                    }
                ],
                "downloadsAvailable": true
            },
            {
                "_meta": {
                    "score": 0
                },
                "copyright": {
                    "licenseType": "NO",
                    "determinationType": "GOV_PUBLIC_USE_PERMITTED",
                    "thirdPartyContentCondition": "NOT_SET"
                },
                "subjectCategories": [
                    "Aerodynamics"
                ],
                "exportControl": {
                    "isExportControl": "NO",
                    "ear": "NO",
                    "itar": "NO"
                },
                "distributionDate": "2019-08-12T00:00:00.0000000+00:00",
                "otherReportNumbers": [
                    "NACA-RM-L57E14a"
                ],
                "title": "Aerodynamic Heating and Boundary-Layer Transition on a 1/10-Power Nose Shape in Free Flight at Mach Numbers up to 6.7 and Free-Stream Reynolds Numbers up to 16 x 10(exp 6)",
                "stiType": "OTHER",
                "distribution": "PUBLIC",
                "submittedDate": "2013-08-16T04:19:00.0000000+00:00",
                "authorAffiliations": [
                    {
                        "sequence": 0,
                        "submissionId": 19930089758,
                        "meta": {
                            "author": {
                                "name": "Garland, Benjamine J"
                            },
                            "organization": {}
                        },
                        "id": "0f662e2a24a1489eb62acc39fdc450ca"
                    },
                    {
                        "sequence": 1,
                        "submissionId": 19930089758,
                        "meta": {
                            "author": {
                                "name": "Swanson, Andrew G"
                            },
                            "organization": {}
                        },
                        "id": "03b7599d7a1a48bb84abb2d8b365050a"
                    },
                    {
                        "sequence": 2,
                        "submissionId": 19930089758,
                        "meta": {
                            "author": {
                                "name": "Speegle, Katherine C"
                            },
                            "organization": {}
                        },
                        "id": "293721323a314f24a6362910a9f69b02"
                    }
                ],
                "stiTypeDetails": "Other - NACA Research Memorandum",
                "technicalReviewType": "TECHNICAL_REVIEW_TYPE_NONE",
                "modified": "2019-01-07T00:00:00.0000000+00:00",
                "id": 19930089758,
                "created": "2013-08-16T04:19:00.0000000+00:00",
                "center": {
                    "code": "HQ",
                    "name": "Headquarters",
                    "id": "f0865a34ba1f474d865ab51f212fc69f"
                },
                "onlyAbstract": false,
                "sensitiveInformation": 2,
                "abstract": "A modified 1/10-power nose shape has been tested in free flight at Mach numbers up to 6.7 and free - stream Reynolds numbers based on diameter up to 16 X 10(exp 6). Measured heating rates were presented and compared with calculated values. Agreement ranges from poor on the forward portion of the nose to good on the rearward portion. The local Reynolds numbers of transition based on calculated momentum thickness varied between 1, 600 and 350. Laminar flow was maintained at momentum thickness Reynolds numbers of about 1,000 until the free-stream Reynolds number based on a length of 1 foot reached about 27 X 10(exp 6). At slightly higher free-stream Reynolds numbers transition occurred at momentum thickness Reynolds numbers as low as 250.",
                "isLessonsLearned": false,
                "disseminated": "DOCUMENT_AND_METADATA",
                "publications": [
                    {
                        "submissionId": 19930089758,
                        "id": "f673db638d134a0bb0ca9593d739b771",
                        "publicationDate": "1957-06-17T00:00:00.0000000+00:00"
                    }
                ],
                "status": "CURATED",
                "related": [],
                "downloads": [
                    {
                        "draft": false,
                        "mimetype": "application/pdf",
                        "name": "19930089758.pdf",
                        "type": "STI",
                        "links": {
                            "original": "/api/citations/19930089758/downloads/19930089758.pdf",
                            "pdf": "/api/citations/19930089758/downloads/19930089758.pdf",
                            "fulltext": "/api/citations/19930089758/downloads/19930089758.txt"
                        }
                    }
                ],
                "downloadsAvailable": true
            },
            {
                "_meta": {
                    "score": 0
                },
                "copyright": {
                    "licenseType": "NO",
                    "determinationType": "GOV_PUBLIC_USE_PERMITTED",
                    "thirdPartyContentCondition": "NOT_SET"
                },
                "subjectCategories": [
                    "Aerodynamics"
                ],
                "exportControl": {
                    "isExportControl": "NO",
                    "ear": "NO",
                    "itar": "NO"
                },
                "distributionDate": "2019-06-26T00:00:00.0000000+00:00",
                "otherReportNumbers": [
                    "NACA-TR-191"
                ],
                "title": "Elements of the Wing Section Theory and of the Wing Theory",
                "stiType": "OTHER",
                "distribution": "PUBLIC",
                "submittedDate": "2013-09-06T18:28:00.0000000+00:00",
                "authorAffiliations": [
                    {
                        "sequence": 0,
                        "submissionId": 19930091257,
                        "meta": {
                            "author": {
                                "name": "Munk, Max M"
                            },
                            "organization": {
                                "name": "National Advisory Committee for Aeronautics",
                                "location": "Washington, DC, United States"
                            }
                        },
                        "id": "60afd938706c4f18a227c4bf6e4da0d8"
                    }
                ],
                "stiTypeDetails": "Other - NACA Technical Report",
                "technicalReviewType": "TECHNICAL_REVIEW_TYPE_NONE",
                "modified": "2013-08-29T00:00:00.0000000+00:00",
                "id": 19930091257,
                "created": "2013-09-06T18:28:00.0000000+00:00",
                "center": {
                    "code": "CDMS",
                    "name": "Legacy CDMS",
                    "id": "092d6e0881874968859b972d39a888dc"
                },
                "onlyAbstract": false,
                "sensitiveInformation": 2,
                "abstract": "This report contains those results of the theory of wings and of wing sections which are of immediate practical value. They are proved and demonstrated by the use of the simple conceptions of \"kinetic energy\" and \"momentum\" only, familiar to every engineer; and not by introducing \"isogonal transformations\" and \"vortices,\" which latter mathematical methods are not essential to the theory and better are used only in papers intended for mathematicians and special experts.",
                "isLessonsLearned": false,
                "disseminated": "DOCUMENT_AND_METADATA",
                "publications": [
                    {
                        "submissionId": 19930091257,
                        "id": "2def01ee6d134688a9fcdcdf3b06d142",
                        "publicationDate": "1925-01-01T00:00:00.0000000+00:00"
                    }
                ],
                "status": "CURATED",
                "related": [],
                "downloads": [
                    {
                        "draft": false,
                        "mimetype": "application/pdf",
                        "name": "19930091257.pdf",
                        "type": "STI",
                        "links": {
                            "original": "/api/citations/19930091257/downloads/19930091257.pdf",
                            "pdf": "/api/citations/19930091257/downloads/19930091257.pdf",
                            "fulltext": "/api/citations/19930091257/downloads/19930091257.txt"
                        }
                    }
                ],
                "downloadsAvailable": true
            },
            {
                "_meta": {
                    "score": 0
                },
                "copyright": {
                    "licenseType": "NO",
                    "determinationType": "GOV_PUBLIC_USE_PERMITTED",
                    "thirdPartyContentCondition": "NOT_SET"
                },
                "subjectCategories": [
                    "Aerodynamics"
                ],
                "exportControl": {
                    "isExportControl": "NO",
                    "ear": "NO",
                    "itar": "NO"
                },
                "distributionDate": "2019-06-26T00:00:00.0000000+00:00",
                "otherReportNumbers": [
                    "NACA-TR-210"
                ],
                "title": "Inertia Factors of Ellipsoids for Use in Airship Design",
                "stiType": "OTHER",
                "distribution": "PUBLIC",
                "submittedDate": "2013-09-06T18:28:00.0000000+00:00",
                "authorAffiliations": [
                    {
                        "sequence": 0,
                        "submissionId": 19930091277,
                        "meta": {
                            "author": {
                                "name": "Tuckerman, L. B."
                            },
                            "organization": {}
                        },
                        "id": "399fdec98f2741289d47deec5661e66e"
                    }
                ],
                "stiTypeDetails": "Other - NACA Technical Report",
                "technicalReviewType": "TECHNICAL_REVIEW_TYPE_NONE",
                "modified": "2015-12-02T00:00:00.0000000+00:00",
                "id": 19930091277,
                "created": "2013-09-06T18:28:00.0000000+00:00",
                "center": {
                    "code": "CDMS",
                    "name": "Legacy CDMS",
                    "id": "092d6e0881874968859b972d39a888dc"
                },
                "onlyAbstract": false,
                "sensitiveInformation": 2,
                "abstract": "This report is based on a study made by the writer as a member of the Special Committee on Design of Army Semirigid Airship RS-1 appointed by the National Advisory Committee for Aeronautics. The increasing interest in airships has made the problem of the potential flow of a fluid about an ellipsoid of considerable practical importance. In 1833 George Green, in discussing the effect of the surrounding medium upon the period of a pendulum, derived three elliptic integrals, in terms of which practically all the characteristics of this type of motion can be expressed. The theory of this type of motion is very fully given by Horace Lamb in his \"Hydrodynamics,\" and applications to the theory of airships by many other writers. Tables of the inertia coefficients derived from these integrals are available for the most important special cases. These tables are adequate for most purposes, but occasionally it is desirable to know the values of these integrals in other cases where tabulated values are not available. For this reason it seems worth while to assemble a collection of formulae which would enable them to be computed directly from standard tables of elliptic integrals, circular and hyperbolic functions and logarithms without the need of intermediate transformations. Some of the formulae for special cases (elliptic cylinder, prolate spheroid, oblate spheroid, etc.) have been published before, but the general forms and some special cases have not been found in previous publications. (author)",
                "isLessonsLearned": false,
                "disseminated": "DOCUMENT_AND_METADATA",
                "publications": [
                    {
                        "submissionId": 19930091277,
                        "id": "076af857e42d442c8892f20edcfe2014",
                        "publicationDate": "1926-01-01T00:00:00.0000000+00:00"
                    }
                ],
                "status": "CURATED",
                "related": [],
                "downloads": [
                    {
                        "draft": false,
                        "mimetype": "application/pdf",
                        "name": "19930091277.pdf",
                        "type": "STI",
                        "links": {
                            "original": "/api/citations/19930091277/downloads/19930091277.pdf",
                            "pdf": "/api/citations/19930091277/downloads/19930091277.pdf",
                            "fulltext": "/api/citations/19930091277/downloads/19930091277.txt"
                        }
                    }
                ],
                "downloadsAvailable": true
            },
            {
                "_meta": {
                    "score": 0
                },
                "copyright": {
                    "licenseType": "NO",
                    "determinationType": "GOV_PUBLIC_USE_PERMITTED",
                    "thirdPartyContentCondition": "NOT_SET"
                },
                "subjectCategories": [
                    "Aerodynamics"
                ],
                "keywords": [
                    "AIRFOILS - NACA 66,2-416-66,2-616 - CHAR  & MOMENTS LOW-DRAG - (WING  FLAPS, AUX",
                    "AIRFOILS - NACA 66 - CHAR  & MOMENTS LOW-DRAG (WING FLAPS, AUXILIARY) WIND TUNNE",
                    "AIRFOILS - NACA 23016-4412 - CHAR  & MOMENTS WING FLAPS, AUXILIARY",
                    "PRESSURE DISTRIBUTION - WINGS - LOCKHEED P-58",
                    "MACH NUMBER",
                    "DIVING - PULL-OUTS - LOCKHEED P-58",
                    "PRESSURE DISTRIBUTION - AIRFOILS - NACA 66",
                    "AIRFOILS - NACA 230- CHAR  & MOMENTS WING FLAPS, AUXILIARY"
                ],
                "exportControl": {
                    "isExportControl": "NO",
                    "ear": "NO",
                    "itar": "NO"
                },
                "distributionDate": "2019-06-26T00:00:00.0000000+00:00",
                "otherReportNumbers": [
                    "NACA-WR-A-90"
                ],
                "title": "The Effects of a Highly Cambered Low-Drag Wing and of Auxiliary Flaps on the High-Speed Aerodynamic Characteristics of a Twin-Engine Pursuit Airplane Model",
                "stiType": "OTHER",
                "distribution": "PUBLIC",
                "submittedDate": "2013-09-06T19:05:00.0000000+00:00",
                "authorAffiliations": [
                    {
                        "sequence": 0,
                        "submissionId": 19930092692,
                        "meta": {
                            "author": {
                                "name": "Ganzer, Victor M"
                            },
                            "organization": {
                                "name": "National Advisory Committee for Aeronautics. Ames Aeronautical Lab.",
                                "location": "Moffett Field, CA, United States"
                            }
                        },
                        "id": "54184adcea03491586b6e5821c37f8c9"
                    }
                ],
                "stiTypeDetails": "Other - NACA Wartime Report",
                "technicalReviewType": "TECHNICAL_REVIEW_TYPE_NONE",
                "modified": "2014-08-19T00:00:00.0000000+00:00",
                "id": 19930092692,
                "created": "2013-09-06T19:05:00.0000000+00:00",
                "center": {
                    "code": "CDMS",
                    "name": "Legacy CDMS",
                    "id": "092d6e0881874968859b972d39a888dc"
                },
                "onlyAbstract": false,
                "sensitiveInformation": 2,
                "abstract": "Results are presented for tests of two wings, an NACA 230-series wing and a highly-cambered NACA 66-series wing on a twin-engine pursuit airplane. Auxiliary control flaps were tested in combinations with each wing. Data showing comparison of high-speed aerodynamic characteristics of the model when equipped with each wing, the effect of the auxiliary control flaps on aerodynamic characteristics, and elevator effectiveness for the model with the 66-series wing are presented. High-speed aerodynamic characteristics of the model were improved with the 66-series wing.",
                "isLessonsLearned": false,
                "disseminated": "DOCUMENT_AND_METADATA",
                "publications": [
                    {
                        "submissionId": 19930092692,
                        "id": "8ef51e89ca104f42a411a0d7259b25eb",
                        "publicationDate": "1944-02-19T00:00:00.0000000+00:00"
                    }
                ],
                "status": "CURATED",
                "related": [],
                "downloads": [
                    {
                        "draft": false,
                        "mimetype": "application/pdf",
                        "name": "19930092692.pdf",
                        "type": "STI",
                        "links": {
                            "original": "/api/citations/19930092692/downloads/19930092692.pdf",
                            "pdf": "/api/citations/19930092692/downloads/19930092692.pdf",
                            "fulltext": "/api/citations/19930092692/downloads/19930092692.txt"
                        }
                    }
                ],
                "downloadsAvailable": true
            },
            {
                "_meta": {
                    "score": 0
                },
                "copyright": {
                    "licenseType": "NO",
                    "determinationType": "GOV_PUBLIC_USE_PERMITTED",
                    "thirdPartyContentCondition": "NOT_SET"
                },
                "subjectCategories": [
                    "Aerodynamics"
                ],
                "keywords": [
                    "PITCHING MOMENTS - AIRFOILS",
                    "WING FLAPS",
                    "LATERAL CONTROL DEVICES",
                    "WING SPOILERS",
                    "AIRFOILS - NACA 23012 - CHAR  & MOMENTS WING FLAPS, SLOTTED & AILERONS",
                    "WINGS, TWISTED",
                    "AILERONS, SLOT-LIP",
                    "AILERONS, RETRACTABLE"
                ],
                "exportControl": {
                    "isExportControl": "NO",
                    "ear": "NO",
                    "itar": "NO"
                },
                "distributionDate": "2019-06-26T00:00:00.0000000+00:00",
                "otherReportNumbers": [
                    "NACA-ACR-L5C24a",
                    "NACA-WR-L-124"
                ],
                "title": "Comparison of Pitching Moments Produced by Plain Flaps and by Spoilers and Some Aerodynamic Characteristics of an NACA 23012 Airfoil with Various Types of Aileron",
                "stiType": "OTHER",
                "distribution": "PUBLIC",
                "submittedDate": "2013-09-06T19:09:00.0000000+00:00",
                "authorAffiliations": [
                    {
                        "sequence": 0,
                        "submissionId": 19930092763,
                        "meta": {
                            "author": {
                                "name": "Purser, Paul E."
                            },
                            "organization": {
                                "name": "National Advisory Committee for Aeronautics. Langley Aeronautical Lab.",
                                "location": "Langley Field, VA, United States"
                            }
                        },
                        "id": "90f8ce8c30d943748bfe6efcd99524b5"
                    },
                    {
                        "sequence": 1,
                        "submissionId": 19930092763,
                        "meta": {
                            "author": {
                                "name": "Mckinney, Elizabeth G."
                            },
                            "organization": {
                                "name": "National Advisory Committee for Aeronautics. Langley Aeronautical Lab.",
                                "location": "Langley Field, VA, United States"
                            }
                        },
                        "id": "e22bf953b15d43bca13aa992f6d3c946"
                    }
                ],
                "stiTypeDetails": "Other - NACA Wartime Report",
                "technicalReviewType": "TECHNICAL_REVIEW_TYPE_NONE",
                "modified": "2013-08-29T00:00:00.0000000+00:00",
                "id": 19930092763,
                "sourceIdentifiers": [
                    {
                        "number": "hdl:100.2/ADA800606",
                        "type": "HANDLE"
                    }
                ],
                "created": "2013-09-06T19:09:00.0000000+00:00",
                "center": {
                    "code": "CDMS",
                    "name": "Legacy CDMS",
                    "id": "092d6e0881874968859b972d39a888dc"
                },
                "onlyAbstract": false,
                "sensitiveInformation": 2,
                "abstract": "Sectional characteristics of airfoil having retractable slotted flap with plain, slot-lip, or retractable ailerons are presented for a large range of aileron deflections. The analysis indicated that pitching moments produced by spoilers were less positive than those produced by plain flaps of equal effectiveness, also that pitching moments created by the spoiler increased less with the Mach number than similar moments produced by plain flaps. Positive values of pitching moment decreased as devices were located nearer airfoil leading edge.",
                "isLessonsLearned": false,
                "disseminated": "DOCUMENT_AND_METADATA",
                "publications": [
                    {
                        "submissionId": 19930092763,
                        "id": "79b9e46c66fa40d5aee21121d3dddb3a",
                        "publicationDate": "1945-04-01T00:00:00.0000000+00:00"
                    }
                ],
                "status": "CURATED",
                "related": [],
                "downloads": [
                    {
                        "draft": false,
                        "mimetype": "application/pdf",
                        "name": "19930092763.pdf",
                        "type": "STI",
                        "links": {
                            "original": "/api/citations/19930092763/downloads/19930092763.pdf",
                            "pdf": "/api/citations/19930092763/downloads/19930092763.pdf",
                            "fulltext": "/api/citations/19930092763/downloads/19930092763.txt"
                        }
                    }
                ],
                "downloadsAvailable": true
            },
            {
                "_meta": {
                    "score": 0
                },
                "copyright": {
                    "licenseType": "NO",
                    "determinationType": "GOV_PUBLIC_USE_PERMITTED",
                    "thirdPartyContentCondition": "NOT_SET"
                },
                "subjectCategories": [
                    "Aerodynamics"
                ],
                "keywords": [
                    "TABS, ELEVATOR - GRUMMAN TBF-1",
                    "TAIL SURFACES, HORIZONTAL - GRUMMAN TBF-1 WIND TUNNEL TESTS (NACA-10'X 7')",
                    "ELEVATORS - GRUMMAN TBF-1"
                ],
                "exportControl": {
                    "isExportControl": "NO",
                    "ear": "NO",
                    "itar": "NO"
                },
                "distributionDate": "2019-06-26T00:00:00.0000000+00:00",
                "otherReportNumbers": [
                    "NACA-WR-L-702"
                ],
                "title": "Wind-Tunnel Investigation of a Revised Horizontal Tail Surface for the Grumman TBF-1 Airplane",
                "stiType": "OTHER",
                "distribution": "PUBLIC",
                "submittedDate": "2013-09-06T19:16:00.0000000+00:00",
                "authorAffiliations": [
                    {
                        "sequence": 0,
                        "submissionId": 19930092903,
                        "meta": {
                            "author": {
                                "name": "Liddell, Robert B."
                            },
                            "organization": {
                                "name": "National Advisory Committee for Aeronautics. Langley Aeronautical Lab.",
                                "location": "Langley Field, VA, United States"
                            }
                        },
                        "id": "480979aefd7640bf91744eca4c31bb9d"
                    },
                    {
                        "sequence": 1,
                        "submissionId": 19930092903,
                        "meta": {
                            "author": {
                                "name": "McKee, John W."
                            },
                            "organization": {
                                "name": "National Advisory Committee for Aeronautics. Langley Aeronautical Lab.",
                                "location": "Langley Field, VA, United States"
                            }
                        },
                        "id": "a3d3ac70a69e436da1cecf00985d4b65"
                    }
                ],
                "stiTypeDetails": "Other - NACA Wartime Report",
                "technicalReviewType": "TECHNICAL_REVIEW_TYPE_NONE",
                "modified": "2014-08-26T00:00:00.0000000+00:00",
                "id": 19930092903,
                "created": "2013-09-06T19:16:00.0000000+00:00",
                "center": {
                    "code": "CDMS",
                    "name": "Legacy CDMS",
                    "id": "092d6e0881874968859b972d39a888dc"
                },
                "onlyAbstract": false,
                "sensitiveInformation": 2,
                "abstract": "No abstract available",
                "isLessonsLearned": false,
                "disseminated": "DOCUMENT_AND_METADATA",
                "publications": [
                    {
                        "submissionId": 19930092903,
                        "id": "bda1f31b59f643d0b56a378719f1bc0a",
                        "publicationDate": "1943-02-01T00:00:00.0000000+00:00"
                    }
                ],
                "status": "CURATED",
                "related": [],
                "downloads": [
                    {
                        "draft": false,
                        "mimetype": "application/pdf",
                        "name": "19930092903.pdf",
                        "type": "STI",
                        "links": {
                            "original": "/api/citations/19930092903/downloads/19930092903.pdf",
                            "pdf": "/api/citations/19930092903/downloads/19930092903.pdf",
                            "fulltext": "/api/citations/19930092903/downloads/19930092903.txt"
                        }
                    }
                ],
                "downloadsAvailable": true
            },
            {
                "_meta": {
                    "score": 0
                },
                "copyright": {
                    "licenseType": "NO",
                    "determinationType": "GOV_PUBLIC_USE_PERMITTED",
                    "thirdPartyContentCondition": "NOT_SET"
                },
                "subjectCategories": [
                    "Aerodynamics"
                ],
                "keywords": [
                    "FLYING, HIGH-SPEED",
                    "CONTROL STICKS-FORCES",
                    "AILERONS, BALANCED - SEALED-GAP",
                    "AILERONS - WIND TUNNEL TESTS",
                    "AILERONS, BALANCED - HINGE MOMENTS",
                    "PRESSURE DISTRIBUTION-AIRFOILS-NACA 66,2-216",
                    "AIRFOILS-NACA 66,2-216-CHAR , MOMENTS & ORDINATES LOW-DRAG",
                    "MACH NUMBER",
                    "WIND TUNNEL TESTS-NACA-STABILITY"
                ],
                "exportControl": {
                    "isExportControl": "NO",
                    "ear": "NO",
                    "itar": "NO"
                },
                "distributionDate": "2019-06-26T00:00:00.0000000+00:00",
                "otherReportNumbers": [
                    "NACA-WR-L-431",
                    "NACA-ACR-3F11"
                ],
                "title": "Wind Tunnel Tests of Ailerons at Various Speeds I : Ailerons of 0.20 Airfoil Chord and True Contour with 0.35 Aileron-chord Extreme Blunt Nose Balance on the NACA 66,2-216 Airfoil",
                "stiType": "OTHER",
                "distribution": "PUBLIC",
                "submittedDate": "2013-09-06T19:18:00.0000000+00:00",
                "authorAffiliations": [
                    {
                        "sequence": 0,
                        "submissionId": 19930092929,
                        "meta": {
                            "author": {
                                "name": "Letko, W"
                            },
                            "organization": {
                                "name": "National Advisory Committee for Aeronautics. Langley Aeronautical Lab.",
                                "location": "Langley Field, VA, United States"
                            }
                        },
                        "id": "e1d7656c9b1848359af3b1d71ca3d231"
                    },
                    {
                        "sequence": 1,
                        "submissionId": 19930092929,
                        "meta": {
                            "author": {
                                "name": "Denaci, H. G."
                            },
                            "organization": {
                                "name": "National Advisory Committee for Aeronautics. Langley Aeronautical Lab.",
                                "location": "Langley Field, VA, United States"
                            }
                        },
                        "id": "c22cdf8ab1764004b850dadee09a4bf0"
                    },
                    {
                        "sequence": 2,
                        "submissionId": 19930092929,
                        "meta": {
                            "author": {
                                "name": "Freed, C"
                            },
                            "organization": {
                                "name": "National Advisory Committee for Aeronautics. Langley Aeronautical Lab.",
                                "location": "Langley Field, VA, United States"
                            }
                        },
                        "id": "da7125bdcf6b47b69d3e960d6909d1c8"
                    }
                ],
                "stiTypeDetails": "Other - NACA Wartime Report",
                "technicalReviewType": "TECHNICAL_REVIEW_TYPE_NONE",
                "modified": "2013-08-29T00:00:00.0000000+00:00",
                "id": 19930092929,
                "created": "2013-09-06T19:18:00.0000000+00:00",
                "center": {
                    "code": "CDMS",
                    "name": "Legacy CDMS",
                    "id": "092d6e0881874968859b972d39a888dc"
                },
                "onlyAbstract": false,
                "sensitiveInformation": 2,
                "abstract": "Hinge-moment, lift, and pressure-distribution measurements were made in the two-dimensional test section of the NACA stability tunnel on a blunt-nose balance-type aileron on an NACA 66,2-216 airfoil at speeds up to 360 miles per hour corresponding to a Mach number of 0.475. The tests were made primarily to determine the effect of speed on the action of this type of aileron. The balance-nose radii of the aileron were varied from 0 to 0.02 of the airfoil chord and the gap width was varied from 0.0005 to 0.0107 of the airfoil chord. Tests were also made with the gap sealed.",
                "isLessonsLearned": false,
                "disseminated": "DOCUMENT_AND_METADATA",
                "publications": [
                    {
                        "submissionId": 19930092929,
                        "id": "faf67e9c613f4fdc9a06975b8ece014c",
                        "publicationDate": "1943-06-01T00:00:00.0000000+00:00"
                    }
                ],
                "status": "CURATED",
                "related": [],
                "downloads": [
                    {
                        "draft": false,
                        "mimetype": "application/pdf",
                        "name": "19930092929.pdf",
                        "type": "STI",
                        "links": {
                            "original": "/api/citations/19930092929/downloads/19930092929.pdf",
                            "pdf": "/api/citations/19930092929/downloads/19930092929.pdf",
                            "fulltext": "/api/citations/19930092929/downloads/19930092929.txt"
                        }
                    }
                ],
                "downloadsAvailable": true
            },
            {
                "_meta": {
                    "score": 0
                },
                "copyright": {
                    "licenseType": "NO",
                    "determinationType": "GOV_PUBLIC_USE_PERMITTED",
                    "thirdPartyContentCondition": "NOT_SET"
                },
                "subjectCategories": [
                    "Aerodynamics"
                ],
                "keywords": [
                    "LOOPING - GROUND",
                    "FAIRINGS, GUN",
                    "GUNS, WING - MOUNTING",
                    "AIRPLANES - GRUMMAN F4F-3 FLIGHT TESTS (AMER  )",
                    "AIR FLOW - VISUALIZATION - TUFTS",
                    "STALLING SPEEDS"
                ],
                "exportControl": {
                    "isExportControl": "NO",
                    "ear": "NO",
                    "itar": "NO"
                },
                "distributionDate": "2019-06-26T00:00:00.0000000+00:00",
                "otherReportNumbers": [
                    "NACA-WR-L-247"
                ],
                "title": "Flight Investigation of Wing-gun Fairings on a Fighter Type Airplane",
                "stiType": "OTHER",
                "distribution": "PUBLIC",
                "submittedDate": "2013-09-06T18:31:00.0000000+00:00",
                "authorAffiliations": [
                    {
                        "sequence": 0,
                        "submissionId": 19930092999,
                        "meta": {
                            "author": {
                                "name": "White, M D"
                            },
                            "organization": {
                                "name": "National Advisory Committee for Aeronautics. Langley Aeronautical Lab.",
                                "location": "Langley Field, VA, United States"
                            }
                        },
                        "id": "c1ed3608653d464caaf92411cf7c2d57"
                    }
                ],
                "stiTypeDetails": "Other - NACA Wartime Report",
                "technicalReviewType": "TECHNICAL_REVIEW_TYPE_NONE",
                "modified": "2014-07-29T00:00:00.0000000+00:00",
                "id": 19930092999,
                "created": "2013-09-06T18:31:00.0000000+00:00",
                "center": {
                    "code": "CDMS",
                    "name": "Legacy CDMS",
                    "id": "092d6e0881874968859b972d39a888dc"
                },
                "onlyAbstract": false,
                "sensitiveInformation": 2,
                "abstract": "Description is given of flight tests conducted on gun fairings, designed to correct the detrimental effects of the projecting and submerged wing guns on an F4F-3 fighter. It was found that the installation of unfaired guns on a clean wing resulted in a premature stall that increased the stalling speed in the carrier-approach and landing conditions of flight by suitably fairing the guns, it was possible to reduce the stalling speeds to values approaching very nearly the clean-wing values.",
                "isLessonsLearned": false,
                "disseminated": "DOCUMENT_AND_METADATA",
                "publications": [
                    {
                        "submissionId": 19930092999,
                        "id": "ab74d8698f554ecaacf0deb1ff89ebfc",
                        "publicationDate": "1941-10-01T00:00:00.0000000+00:00"
                    }
                ],
                "status": "CURATED",
                "related": [],
                "downloads": [
                    {
                        "draft": false,
                        "mimetype": "application/pdf",
                        "name": "19930092999.pdf",
                        "type": "STI",
                        "links": {
                            "original": "/api/citations/19930092999/downloads/19930092999.pdf",
                            "pdf": "/api/citations/19930092999/downloads/19930092999.pdf",
                            "fulltext": "/api/citations/19930092999/downloads/19930092999.txt"
                        }
                    }
                ],
                "downloadsAvailable": true
            }
        ],
        "aggregations": {
            "created": {
                "buckets": [
                    {
                        "key_as_string": "2013",
                        "key": 1356998400000,
                        "doc_count": 2611
                    },
                    {
                        "key_as_string": "2020",
                        "key": 1577836800000,
                        "doc_count": 261
                    },
                    {
                        "key_as_string": "2016",
                        "key": 1451606400000,
                        "doc_count": 235
                    },
                    {
                        "key_as_string": "2021",
                        "key": 1609459200000,
                        "doc_count": 167
                    },
                    {
                        "key_as_string": "2015",
                        "key": 1420070400000,
                        "doc_count": 164
                    },
                    {
                        "key_as_string": "2014",
                        "key": 1388534400000,
                        "doc_count": 144
                    },
                    {
                        "key_as_string": "2017",
                        "key": 1483228800000,
                        "doc_count": 140
                    },
                    {
                        "key_as_string": "2019",
                        "key": 1546300800000,
                        "doc_count": 118
                    },
                    {
                        "key_as_string": "2018",
                        "key": 1514764800000,
                        "doc_count": 70
                    }
                ]
            },
            "author": {
                "doc_count_error_upper_bound": 20,
                "sum_other_doc_count": 10227,
                "buckets": [
                    {
                        "key": "Choudhari, Meelan M.",
                        "doc_count": 40
                    },
                    {
                        "key": "Rumsey, Christopher L.",
                        "doc_count": 33
                    },
                    {
                        "key": "Li, Fei",
                        "doc_count": 32
                    },
                    {
                        "key": "Silva, Walter A.",
                        "doc_count": 30
                    },
                    {
                        "key": "Chang, Chau-Lyan",
                        "doc_count": 25
                    },
                    {
                        "key": "Luckring, James M.",
                        "doc_count": 25
                    },
                    {
                        "key": "Berry, Scott A.",
                        "doc_count": 23
                    },
                    {
                        "key": "Heeg, Jennifer",
                        "doc_count": 22
                    },
                    {
                        "key": "Chwalowski, Pawel",
                        "doc_count": 21
                    },
                    {
                        "key": "Heineck, James T.",
                        "doc_count": 21
                    },
                    {
                        "key": "Carter, Melissa B.",
                        "doc_count": 20
                    },
                    {
                        "key": "Meelan M Choudhari",
                        "doc_count": 20
                    },
                    {
                        "key": "Broeren, Andy P.",
                        "doc_count": 19
                    },
                    {
                        "key": "Bartels, Robert E.",
                        "doc_count": 18
                    },
                    {
                        "key": "Biedron, Robert T.",
                        "doc_count": 17
                    },
                    {
                        "key": "Pedro Paredes",
                        "doc_count": 17
                    },
                    {
                        "key": "Erickson, Gary E.",
                        "doc_count": 16
                    },
                    {
                        "key": "Fei Li",
                        "doc_count": 16
                    },
                    {
                        "key": "Khorrami, Mehdi R.",
                        "doc_count": 16
                    },
                    {
                        "key": "Allan, Brian G.",
                        "doc_count": 13
                    }
                ]
            },
            "reportNumber": {
                "doc_count_error_upper_bound": 5,
                "sum_other_doc_count": 4765,
                "buckets": [
                    {
                        "key": "AIAA Paper 2000-4008",
                        "doc_count": 3
                    },
                    {
                        "key": "AF-AM-163",
                        "doc_count": 2
                    },
                    {
                        "key": "AIAA Paper 2000-4011",
                        "doc_count": 2
                    },
                    {
                        "key": "AIAA Paper 2003-0209",
                        "doc_count": 2
                    },
                    {
                        "key": "AIAA Paper 2014-0486",
                        "doc_count": 2
                    },
                    {
                        "key": "AIAA Paper 97-2473",
                        "doc_count": 2
                    },
                    {
                        "key": "E-17164",
                        "doc_count": 2
                    },
                    {
                        "key": "L-18221",
                        "doc_count": 2
                    },
                    {
                        "key": "Paper-13",
                        "doc_count": 2
                    },
                    {
                        "key": "0021-8669",
                        "doc_count": 1
                    },
                    {
                        "key": "1533-3868",
                        "doc_count": 1
                    },
                    {
                        "key": "20205002538 Abstract STI",
                        "doc_count": 1
                    },
                    {
                        "key": "20205002836",
                        "doc_count": 1
                    },
                    {
                        "key": "20205010183",
                        "doc_count": 1
                    },
                    {
                        "key": "20210012855",
                        "doc_count": 1
                    },
                    {
                        "key": "20210016094",
                        "doc_count": 1
                    },
                    {
                        "key": "20210020138",
                        "doc_count": 1
                    },
                    {
                        "key": "20210024143",
                        "doc_count": 1
                    },
                    {
                        "key": "212379-1",
                        "doc_count": 1
                    },
                    {
                        "key": "34887",
                        "doc_count": 1
                    }
                ]
            },
            "center": {
                "doc_count_error_upper_bound": 0,
                "sum_other_doc_count": 0,
                "buckets": [
                    {
                        "key": "LaRC",
                        "doc_count": 1871
                    },
                    {
                        "key": "ARC",
                        "doc_count": 618
                    },
                    {
                        "key": "GRC",
                        "doc_count": 507
                    },
                    {
                        "key": "CDMS",
                        "doc_count": 316
                    },
                    {
                        "key": "HQ",
                        "doc_count": 277
                    },
                    {
                        "key": "AFRC",
                        "doc_count": 175
                    },
                    {
                        "key": "JSC",
                        "doc_count": 57
                    },
                    {
                        "key": "MSFC",
                        "doc_count": 34
                    },
                    {
                        "key": "JPL",
                        "doc_count": 22
                    },
                    {
                        "key": "GSFC",
                        "doc_count": 21
                    },
                    {
                        "key": "KSC",
                        "doc_count": 7
                    },
                    {
                        "key": "SSC",
                        "doc_count": 4
                    },
                    {
                        "key": "WFF",
                        "doc_count": 1
                    }
                ]
            },
            "fundingNumber": {
                "doc_count_error_upper_bound": 10,
                "sum_other_doc_count": 2381,
                "buckets": [
                    {
                        "key": "109492.02.07.09.01",
                        "doc_count": 71
                    },
                    {
                        "key": "NNA16BD60C",
                        "doc_count": 46
                    },
                    {
                        "key": "WBS 432938.11.01.07.43.40.08",
                        "doc_count": 41
                    },
                    {
                        "key": "725017.02.07.03.01",
                        "doc_count": 33
                    },
                    {
                        "key": "NNC12BA01B",
                        "doc_count": 32
                    },
                    {
                        "key": "NNA10DF26C",
                        "doc_count": 30
                    },
                    {
                        "key": "109492.02.07.01.01",
                        "doc_count": 24
                    },
                    {
                        "key": "NNA15BB15C",
                        "doc_count": 21
                    },
                    {
                        "key": "WBS 109492.02.07.01.01",
                        "doc_count": 21
                    },
                    {
                        "key": "109492.02.07.05.01",
                        "doc_count": 20
                    },
                    {
                        "key": "981271.02.40.04.03.50",
                        "doc_count": 15
                    },
                    {
                        "key": "NAS1-96014",
                        "doc_count": 12
                    },
                    {
                        "key": "NNA16BD26C",
                        "doc_count": 12
                    },
                    {
                        "key": "WBS 648987.02.03.03.10",
                        "doc_count": 11
                    },
                    {
                        "key": "WBS 984754.02.07.03.13.02",
                        "doc_count": 11
                    },
                    {
                        "key": "ARMD_109492",
                        "doc_count": 10
                    },
                    {
                        "key": "NNL09AA00A",
                        "doc_count": 9
                    },
                    {
                        "key": "WBS 794072.02.07.02.03",
                        "doc_count": 9
                    },
                    {
                        "key": "NND08RR01B",
                        "doc_count": 8
                    },
                    {
                        "key": "WBS 599489.02.07.07.04.11.01",
                        "doc_count": 8
                    }
                ]
            },
            "published": {
                "buckets": [
                    {
                        "key_as_string": "1999",
                        "key": 915148800000,
                        "doc_count": 187
                    },
                    {
                        "key_as_string": "2015",
                        "key": 1420070400000,
                        "doc_count": 175
                    },
                    {
                        "key_as_string": "2016",
                        "key": 1451606400000,
                        "doc_count": 169
                    },
                    {
                        "key_as_string": "2017",
                        "key": 1483228800000,
                        "doc_count": 153
                    },
                    {
                        "key_as_string": "2010",
                        "key": 1262304000000,
                        "doc_count": 147
                    },
                    {
                        "key_as_string": "2011",
                        "key": 1293840000000,
                        "doc_count": 143
                    },
                    {
                        "key_as_string": "2012",
                        "key": 1325376000000,
                        "doc_count": 142
                    },
                    {
                        "key_as_string": "1996",
                        "key": 820454400000,
                        "doc_count": 141
                    },
                    {
                        "key_as_string": "2014",
                        "key": 1388534400000,
                        "doc_count": 128
                    },
                    {
                        "key_as_string": "2001",
                        "key": 978307200000,
                        "doc_count": 119
                    },
                    {
                        "key_as_string": "2013",
                        "key": 1356998400000,
                        "doc_count": 119
                    },
                    {
                        "key_as_string": "2000",
                        "key": 946684800000,
                        "doc_count": 108
                    },
                    {
                        "key_as_string": "1997",
                        "key": 852076800000,
                        "doc_count": 103
                    },
                    {
                        "key_as_string": "2003",
                        "key": 1041379200000,
                        "doc_count": 98
                    },
                    {
                        "key_as_string": "1998",
                        "key": 883612800000,
                        "doc_count": 97
                    },
                    {
                        "key_as_string": "2019",
                        "key": 1546300800000,
                        "doc_count": 89
                    },
                    {
                        "key_as_string": "2018",
                        "key": 1514764800000,
                        "doc_count": 84
                    },
                    {
                        "key_as_string": "1961",
                        "key": -283996800000,
                        "doc_count": 83
                    },
                    {
                        "key_as_string": "2007",
                        "key": 1167609600000,
                        "doc_count": 83
                    },
                    {
                        "key_as_string": "2002",
                        "key": 1009843200000,
                        "doc_count": 82
                    },
                    {
                        "key_as_string": "2009",
                        "key": 1230768000000,
                        "doc_count": 78
                    },
                    {
                        "key_as_string": "2004",
                        "key": 1072915200000,
                        "doc_count": 77
                    },
                    {
                        "key_as_string": "1959",
                        "key": -347155200000,
                        "doc_count": 75
                    },
                    {
                        "key_as_string": "2006",
                        "key": 1136073600000,
                        "doc_count": 65
                    },
                    {
                        "key_as_string": "2008",
                        "key": 1199145600000,
                        "doc_count": 60
                    },
                    {
                        "key_as_string": "1995",
                        "key": 788918400000,
                        "doc_count": 57
                    },
                    {
                        "key_as_string": "1947",
                        "key": -725846400000,
                        "doc_count": 56
                    },
                    {
                        "key_as_string": "1960",
                        "key": -315619200000,
                        "doc_count": 53
                    },
                    {
                        "key_as_string": "2005",
                        "key": 1104537600000,
                        "doc_count": 52
                    },
                    {
                        "key_as_string": "1994",
                        "key": 757382400000,
                        "doc_count": 44
                    },
                    {
                        "key_as_string": "1958",
                        "key": -378691200000,
                        "doc_count": 33
                    },
                    {
                        "key_as_string": "2020",
                        "key": 1577836800000,
                        "doc_count": 32
                    },
                    {
                        "key_as_string": "1948",
                        "key": -694310400000,
                        "doc_count": 25
                    },
                    {
                        "key_as_string": "1944",
                        "key": -820540800000,
                        "doc_count": 21
                    },
                    {
                        "key_as_string": "1945",
                        "key": -788918400000,
                        "doc_count": 21
                    },
                    {
                        "key_as_string": "1946",
                        "key": -757382400000,
                        "doc_count": 21
                    },
                    {
                        "key_as_string": "1949",
                        "key": -662688000000,
                        "doc_count": 21
                    },
                    {
                        "key_as_string": "1953",
                        "key": -536457600000,
                        "doc_count": 21
                    },
                    {
                        "key_as_string": "1942",
                        "key": -883612800000,
                        "doc_count": 20
                    },
                    {
                        "key_as_string": "1954",
                        "key": -504921600000,
                        "doc_count": 18
                    },
                    {
                        "key_as_string": "1955",
                        "key": -473385600000,
                        "doc_count": 16
                    },
                    {
                        "key_as_string": "1943",
                        "key": -852076800000,
                        "doc_count": 15
                    },
                    {
                        "key_as_string": "1952",
                        "key": -568080000000,
                        "doc_count": 15
                    },
                    {
                        "key_as_string": "1984",
                        "key": 441763200000,
                        "doc_count": 15
                    },
                    {
                        "key_as_string": "1951",
                        "key": -599616000000,
                        "doc_count": 14
                    },
                    {
                        "key_as_string": "1962",
                        "key": -252460800000,
                        "doc_count": 14
                    },
                    {
                        "key_as_string": "2021",
                        "key": 1609459200000,
                        "doc_count": 14
                    },
                    {
                        "key_as_string": "1941",
                        "key": -915148800000,
                        "doc_count": 13
                    },
                    {
                        "key_as_string": "1957",
                        "key": -410227200000,
                        "doc_count": 13
                    },
                    {
                        "key_as_string": "1950",
                        "key": -631152000000,
                        "doc_count": 11
                    },
                    {
                        "key_as_string": "1956",
                        "key": -441849600000,
                        "doc_count": 10
                    },
                    {
                        "key_as_string": "1993",
                        "key": 725846400000,
                        "doc_count": 10
                    },
                    {
                        "key_as_string": "1967",
                        "key": -94694400000,
                        "doc_count": 8
                    },
                    {
                        "key_as_string": "1992",
                        "key": 694224000000,
                        "doc_count": 8
                    },
                    {
                        "key_as_string": "1986",
                        "key": 504921600000,
                        "doc_count": 7
                    },
                    {
                        "key_as_string": "1939",
                        "key": -978307200000,
                        "doc_count": 6
                    },
                    {
                        "key_as_string": "1940",
                        "key": -946771200000,
                        "doc_count": 6
                    },
                    {
                        "key_as_string": "1968",
                        "key": -63158400000,
                        "doc_count": 6
                    },
                    {
                        "key_as_string": "1981",
                        "key": 347155200000,
                        "doc_count": 6
                    },
                    {
                        "key_as_string": "1938",
                        "key": -1009843200000,
                        "doc_count": 5
                    },
                    {
                        "key_as_string": "1963",
                        "key": -220924800000,
                        "doc_count": 5
                    },
                    {
                        "key_as_string": "1965",
                        "key": -157766400000,
                        "doc_count": 5
                    },
                    {
                        "key_as_string": "1980",
                        "key": 315532800000,
                        "doc_count": 5
                    },
                    {
                        "key_as_string": "1985",
                        "key": 473385600000,
                        "doc_count": 5
                    },
                    {
                        "key_as_string": "1971",
                        "key": 31536000000,
                        "doc_count": 4
                    },
                    {
                        "key_as_string": "1989",
                        "key": 599616000000,
                        "doc_count": 4
                    },
                    {
                        "key_as_string": "1991",
                        "key": 662688000000,
                        "doc_count": 4
                    },
                    {
                        "key_as_string": "1924",
                        "key": -1451692800000,
                        "doc_count": 3
                    },
                    {
                        "key_as_string": "1925",
                        "key": -1420070400000,
                        "doc_count": 2
                    },
                    {
                        "key_as_string": "1926",
                        "key": -1388534400000,
                        "doc_count": 2
                    },
                    {
                        "key_as_string": "1930",
                        "key": -1262304000000,
                        "doc_count": 2
                    },
                    {
                        "key_as_string": "1934",
                        "key": -1136073600000,
                        "doc_count": 2
                    },
                    {
                        "key_as_string": "1935",
                        "key": -1104537600000,
                        "doc_count": 2
                    },
                    {
                        "key_as_string": "1964",
                        "key": -189388800000,
                        "doc_count": 2
                    },
                    {
                        "key_as_string": "1970",
                        "key": 0,
                        "doc_count": 2
                    },
                    {
                        "key_as_string": "1972",
                        "key": 63072000000,
                        "doc_count": 2
                    },
                    {
                        "key_as_string": "1973",
                        "key": 94694400000,
                        "doc_count": 2
                    },
                    {
                        "key_as_string": "1974",
                        "key": 126230400000,
                        "doc_count": 2
                    },
                    {
                        "key_as_string": "1976",
                        "key": 189302400000,
                        "doc_count": 2
                    },
                    {
                        "key_as_string": "1987",
                        "key": 536457600000,
                        "doc_count": 2
                    },
                    {
                        "key_as_string": "1988",
                        "key": 567993600000,
                        "doc_count": 2
                    },
                    {
                        "key_as_string": "1990",
                        "key": 631152000000,
                        "doc_count": 2
                    },
                    {
                        "key_as_string": "1920",
                        "key": -1577923200000,
                        "doc_count": 1
                    },
                    {
                        "key_as_string": "1923",
                        "key": -1483228800000,
                        "doc_count": 1
                    },
                    {
                        "key_as_string": "1927",
                        "key": -1356998400000,
                        "doc_count": 1
                    },
                    {
                        "key_as_string": "1931",
                        "key": -1230768000000,
                        "doc_count": 1
                    },
                    {
                        "key_as_string": "1932",
                        "key": -1199232000000,
                        "doc_count": 1
                    },
                    {
                        "key_as_string": "1933",
                        "key": -1167609600000,
                        "doc_count": 1
                    },
                    {
                        "key_as_string": "1937",
                        "key": -1041379200000,
                        "doc_count": 1
                    },
                    {
                        "key_as_string": "1966",
                        "key": -126230400000,
                        "doc_count": 1
                    },
                    {
                        "key_as_string": "1969",
                        "key": -31536000000,
                        "doc_count": 1
                    },
                    {
                        "key_as_string": "1977",
                        "key": 220924800000,
                        "doc_count": 1
                    },
                    {
                        "key_as_string": "1979",
                        "key": 283996800000,
                        "doc_count": 1
                    },
                    {
                        "key_as_string": "1982",
                        "key": 378691200000,
                        "doc_count": 1
                    },
                    {
                        "key_as_string": "2022",
                        "key": 1640995200000,
                        "doc_count": 1
                    }
                ]
            },
            "distribution": {
                "doc_count_error_upper_bound": 0,
                "sum_other_doc_count": 0,
                "buckets": [
                    {
                        "key": "PUBLIC",
                        "doc_count": 3910
                    }
                ]
            },
            "stiType": {
                "doc_count_error_upper_bound": 0,
                "sum_other_doc_count": 0,
                "buckets": [
                    {
                        "key": "CONFERENCE_PAPER",
                        "doc_count": 1537
                    },
                    {
                        "key": "OTHER",
                        "doc_count": 794
                    },
                    {
                        "key": "TECHNICAL_MEMORANDUM",
                        "doc_count": 412
                    },
                    {
                        "key": "PRESENTATION",
                        "doc_count": 395
                    },
                    {
                        "key": "PREPRINT",
                        "doc_count": 246
                    },
                    {
                        "key": "CONTRACTOR_REPORT",
                        "doc_count": 188
                    },
                    {
                        "key": "REPRINT",
                        "doc_count": 137
                    },
                    {
                        "key": "TECHNICAL_PUBLICATION",
                        "doc_count": 72
                    },
                    {
                        "key": "VIDEO",
                        "doc_count": 26
                    },
                    {
                        "key": "CONFERENCE_PROCEEDINGS",
                        "doc_count": 25
                    },
                    {
                        "key": "THESIS_DISSERTATION",
                        "doc_count": 22
                    },
                    {
                        "key": "ACCEPTED_MANUSCRIPT",
                        "doc_count": 20
                    },
                    {
                        "key": "CONTRACTOR_OR_GRANTEE_REPORT",
                        "doc_count": 20
                    },
                    {
                        "key": "BOOK",
                        "doc_count": 5
                    },
                    {
                        "key": "SPECIAL_PUBLICATION",
                        "doc_count": 4
                    },
                    {
                        "key": "POSTER",
                        "doc_count": 3
                    },
                    {
                        "key": "BOOK_CHAPTER",
                        "doc_count": 2
                    },
                    {
                        "key": "WHITE_PAPER",
                        "doc_count": 2
                    }
                ]
            },
            "subjectCategory": {
                "doc_count_error_upper_bound": 0,
                "sum_other_doc_count": 52,
                "buckets": [
                    {
                        "key": "Aerodynamics",
                        "doc_count": 3910
                    },
                    {
                        "key": "Fluid Mechanics and Thermodynamics",
                        "doc_count": 180
                    },
                    {
                        "key": "Aircraft Design, Testing and Performance",
                        "doc_count": 127
                    },
                    {
                        "key": "Acoustics",
                        "doc_count": 86
                    },
                    {
                        "key": "Aircraft Propulsion and Power",
                        "doc_count": 32
                    },
                    {
                        "key": "Numerical Analysis",
                        "doc_count": 32
                    },
                    {
                        "key": "Research and Support Facilities (Air)",
                        "doc_count": 32
                    },
                    {
                        "key": "Aircraft Stability and Control",
                        "doc_count": 31
                    },
                    {
                        "key": "Spacecraft Design, Testing and Performance",
                        "doc_count": 31
                    },
                    {
                        "key": "Computer Programming and Software",
                        "doc_count": 25
                    },
                    {
                        "key": "Instrumentation and Photography",
                        "doc_count": 22
                    },
                    {
                        "key": "Aeronautics (General)",
                        "doc_count": 21
                    },
                    {
                        "key": "Launch Vehicles and Launch Operations",
                        "doc_count": 14
                    },
                    {
                        "key": "Air Transportation and Safety",
                        "doc_count": 11
                    },
                    {
                        "key": "Statistics and Probability",
                        "doc_count": 9
                    },
                    {
                        "key": "Structural Mechanics",
                        "doc_count": 8
                    },
                    {
                        "key": "Mathematical and Computer Sciences (General)",
                        "doc_count": 7
                    },
                    {
                        "key": "Computer Operations and Hardware",
                        "doc_count": 5
                    },
                    {
                        "key": "Astrodynamics",
                        "doc_count": 4
                    },
                    {
                        "key": "Ground Support Systems and Facilities (Space)",
                        "doc_count": 4
                    }
                ]
            },
            "disseminated": {
                "doc_count_error_upper_bound": 0,
                "sum_other_doc_count": 0,
                "buckets": [
                    {
                        "key": "DOCUMENT_AND_METADATA",
                        "doc_count": 3461
                    },
                    {
                        "key": "METADATA_ONLY",
                        "doc_count": 449
                    }
                ]
            },
            "stiTypeDetails": {
                "doc_count_error_upper_bound": 0,
                "sum_other_doc_count": 65,
                "buckets": [
                    {
                        "key": "Conference Paper",
                        "doc_count": 1537
                    },
                    {
                        "key": "Technical Memorandum (TM)",
                        "doc_count": 412
                    },
                    {
                        "key": "Presentation",
                        "doc_count": 395
                    },
                    {
                        "key": "Preprint (Draft being sent to journal)",
                        "doc_count": 246
                    },
                    {
                        "key": "Other",
                        "doc_count": 210
                    },
                    {
                        "key": "Contractor Report (CR)",
                        "doc_count": 188
                    },
                    {
                        "key": "Other - NACA Research Memorandum",
                        "doc_count": 172
                    },
                    {
                        "key": "Reprint (Version printed in journal)",
                        "doc_count": 137
                    },
                    {
                        "key": "Other - NASA Technical Note (TN)",
                        "doc_count": 111
                    },
                    {
                        "key": "Technical Publication (TP)",
                        "doc_count": 72
                    },
                    {
                        "key": "Other - NACA Wartime Report",
                        "doc_count": 68
                    },
                    {
                        "key": "Other - NASA Memorandum (MEMO)",
                        "doc_count": 66
                    },
                    {
                        "key": "Other - NACA Technical Memorandum",
                        "doc_count": 50
                    },
                    {
                        "key": "Other - Patent",
                        "doc_count": 42
                    },
                    {
                        "key": "Other - NACA Technical Note",
                        "doc_count": 26
                    },
                    {
                        "key": "Video",
                        "doc_count": 26
                    },
                    {
                        "key": "Conference Proceedings",
                        "doc_count": 25
                    },
                    {
                        "key": "Thesis/Dissertation",
                        "doc_count": 22
                    },
                    {
                        "key": "Accepted Manuscript (Version with final changes)",
                        "doc_count": 20
                    },
                    {
                        "key": "Contractor or Grantee Report",
                        "doc_count": 20
                    }
                ]
            },
            "organization": {
                "doc_count_error_upper_bound": 21,
                "sum_other_doc_count": 2355,
                "buckets": [
                    {
                        "key": "NASA Langley Research Center",
                        "doc_count": 1446
                    },
                    {
                        "key": "NASA Ames Research Center",
                        "doc_count": 547
                    },
                    {
                        "key": "NASA Glenn Research Center",
                        "doc_count": 364
                    },
                    {
                        "key": "Langley Research Center",
                        "doc_count": 297
                    },
                    {
                        "key": "National Advisory Committee for Aeronautics. Langley Aeronautical Lab.",
                        "doc_count": 216
                    },
                    {
                        "key": "NASA Dryden Flight Research Center",
                        "doc_count": 120
                    },
                    {
                        "key": "Science and Technology Corp.",
                        "doc_count": 78
                    },
                    {
                        "key": "NASA Johnson Space Center",
                        "doc_count": 61
                    },
                    {
                        "key": "Ames Research Center",
                        "doc_count": 57
                    },
                    {
                        "key": "National Inst. of Aerospace",
                        "doc_count": 57
                    },
                    {
                        "key": "National Institute of Aerospace",
                        "doc_count": 56
                    },
                    {
                        "key": "Analytical Mechanics Associates, Inc.",
                        "doc_count": 52
                    },
                    {
                        "key": "NASA Armstrong Flight Research Center",
                        "doc_count": 52
                    },
                    {
                        "key": "Boeing Co.",
                        "doc_count": 51
                    },
                    {
                        "key": "NASA Lewis Research Center",
                        "doc_count": 46
                    },
                    {
                        "key": "Jacobs Technology, Inc.",
                        "doc_count": 43
                    },
                    {
                        "key": "Analytical Services and Materials, Inc.",
                        "doc_count": 42
                    },
                    {
                        "key": "Old Dominion Univ.",
                        "doc_count": 39
                    },
                    {
                        "key": "Georgia Inst. of Tech.",
                        "doc_count": 38
                    },
                    {
                        "key": "National Advisory Committee for Aeronautics. Ames Aeronautical Lab.",
                        "doc_count": 38
                    }
                ]
            },
            "modified": {
                "buckets": [
                    {
                        "key_as_string": "2013",
                        "key": 1356998400000,
                        "doc_count": 1897
                    },
                    {
                        "key_as_string": "2011",
                        "key": 1293840000000,
                        "doc_count": 438
                    },
                    {
                        "key_as_string": "2021",
                        "key": 1609459200000,
                        "doc_count": 222
                    },
                    {
                        "key_as_string": "2020",
                        "key": 1577836800000,
                        "doc_count": 152
                    },
                    {
                        "key_as_string": "2014",
                        "key": 1388534400000,
                        "doc_count": 128
                    },
                    {
                        "key_as_string": "2016",
                        "key": 1451606400000,
                        "doc_count": 63
                    },
                    {
                        "key_as_string": "2017",
                        "key": 1483228800000,
                        "doc_count": 42
                    },
                    {
                        "key_as_string": "2018",
                        "key": 1514764800000,
                        "doc_count": 42
                    },
                    {
                        "key_as_string": "2015",
                        "key": 1420070400000,
                        "doc_count": 40
                    },
                    {
                        "key_as_string": "2019",
                        "key": 1546300800000,
                        "doc_count": 39
                    },
                    {
                        "key_as_string": "2022",
                        "key": 1640995200000,
                        "doc_count": 16
                    },
                    {
                        "key_as_string": "2012",
                        "key": 1325376000000,
                        "doc_count": 12
                    }
                ]
            },
            "keyword": {
                "doc_count_error_upper_bound": 9,
                "sum_other_doc_count": 2295,
                "buckets": [
                    {
                        "key": "CFD",
                        "doc_count": 66
                    },
                    {
                        "key": "Aerodynamics",
                        "doc_count": 32
                    },
                    {
                        "key": "aerodynamics",
                        "doc_count": 27
                    },
                    {
                        "key": "Aeroelasticity",
                        "doc_count": 20
                    },
                    {
                        "key": "Boundary Layer Transition",
                        "doc_count": 14
                    },
                    {
                        "key": "Computational Fluid Dynamics",
                        "doc_count": 14
                    },
                    {
                        "key": "computational fluid dynamics",
                        "doc_count": 14
                    },
                    {
                        "key": "Icing",
                        "doc_count": 11
                    },
                    {
                        "key": "Wind Tunnel",
                        "doc_count": 11
                    },
                    {
                        "key": "FUN3D",
                        "doc_count": 10
                    },
                    {
                        "key": "TESTS",
                        "doc_count": 10
                    },
                    {
                        "key": "boundary layer transition",
                        "doc_count": 10
                    },
                    {
                        "key": "Supersonic Retropropulsion",
                        "doc_count": 9
                    },
                    {
                        "key": "buffet",
                        "doc_count": 9
                    },
                    {
                        "key": "unsteady aerodynamics",
                        "doc_count": 9
                    },
                    {
                        "key": "CFD Modeling",
                        "doc_count": 8
                    },
                    {
                        "key": "Calibration",
                        "doc_count": 7
                    },
                    {
                        "key": "EXPERIMENTS",
                        "doc_count": 7
                    },
                    {
                        "key": "Rotorcraft",
                        "doc_count": 6
                    },
                    {
                        "key": "hydrodynamic instability",
                        "doc_count": 6
                    }
                ]
            }
        }
    }



    let articleId = 1;
    //console.log("inside category group")
    let selectedCategory = useSelector((state) => state.CategoryReducer.category);
    let searchKeyword = localStorage.getItem('searchKeyword');
    let searchAuthor = localStorage.getItem('searchAuthor');
    let searchOrganization = localStorage.getItem('searchOrganization');

    //console.log("Selected category from store: ", selectedCategory)

    const [retrievedArticles, setRetrievedArticles] = useState([]);


    // useEffect based on either [category, search keyword, search author]
    useEffect(() => {

        window.fetch(`https://cors-anywhere.herokuapp.com/https://ntrs.nasa.gov/api/citations/search?subjectCategory=${selectedCategory}`, {
            method: 'GET'

        })
            .then((res) => res.json())
            .then((res) => {
                console.log(res.results);
                setRetrievedArticles(res.results);
            })
            .catch((err) => {
                console.log('Error', err)
            })

    }, [selectedCategory])

    useEffect(() => {

        window.fetch(`https://cors-anywhere.herokuapp.com/https://ntrs.nasa.gov/api/citations/search?keyword=${searchKeyword}`, {
            method: 'GET'
        })
            .then((res) => res.json())
            .then((res) => {
                console.log(res.results);
                setRetrievedArticles(res.results);
            })
            .catch((err) => {
                console.log(err)
            })

    }, [searchKeyword])

    useEffect(() => {

        window.fetch(`https://cors-anywhere.herokuapp.com/https://ntrs.nasa.gov/api/citations/search?author=${searchAuthor}`, {
            method: 'GET'
        })
            .then((res) => res.json())
            .then((res) => {
                console.log(res.results);
                setRetrievedArticles(res.results);
            })
            .catch((err) => {
                console.log(err)
            })

    }, [searchAuthor])

    useEffect(() => {

        window.fetch(`https://cors-anywhere.herokuapp.com/https://ntrs.nasa.gov/api/citations/search?organization=${searchOrganization}`, {
            method: 'GET'
        })
            .then((res) => res.json())
            .then((res) => {
                console.log(res.results);
                setRetrievedArticles(res.results);
            })
            .catch((err) => {
                console.log(err)
            })

    }, [searchOrganization])

    // useEffect(() => {
    //     setRetrievedArticles(testObject.results)
    // }, [])

    const [dropDownOpen, setDropDownOpen] = useState(false);
    const [selectedFilter, setSelectedFilter] = useState('Select Filter');

    const filterHandler = (value) => {
        setSelectedFilter(value)
        switch (value) {
            case 'Latest - Earliest Date':
                filterByLatestToEarliestDate();
                break;

            case 'Earliest - Latest Date':
                filterByEarliestToLatestDate();
                break;

            case 'Center (A-Z)':
                filterByCenterAZ();
                break;

            case 'Center (Z-A)':
                filterByCenterZA();
                break;

            case 'Alphabetical (A-Z)':
                filterByAZ();
                break;

            case 'Alphabetical (Z-A)':
                filterByZA();
                break;
            default:
                console.log("Invalid filter.");
        }
    }

    const filterByLatestToEarliestDate = () => {
        retrievedArticles.sort((a, b) => (a.distributionDate < b.distributionDate) ? 1 : -1)
    }

    const filterByEarliestToLatestDate = () => {
        retrievedArticles.sort((a, b) => (a.distributionDate > b.distributionDate) ? 1 : -1)
    }

    const filterByCenterAZ = () => {
        retrievedArticles.sort((a, b) => (a.center.name > b.center.name) ? 1 : -1)
    }

    const filterByCenterZA = () => {
        retrievedArticles.sort((a, b) => (a.center.name < b.center.name) ? 1 : -1)
    }

    const filterByAZ = () => {
        retrievedArticles.sort((a, b) => (a.title > b.title) ? 1 : -1)
    }

    const filterByZA = () => {
        retrievedArticles.sort((a, b) => (a.title < b.title) ? 1 : -1)
    }

    const toggleFilter = () => {
        setDropDownOpen(!dropDownOpen);
    }

    return (
        <div className={styles.backGround}>

            <div style={{ marginLeft: "4rem" }}>
                <h5>Filter by</h5>
                <Dropdown isOpen={dropDownOpen} toggle={toggleFilter} >
                    <DropdownToggle caret>
                        {selectedFilter}
                    </DropdownToggle>
                    <DropdownMenu>
                        <DropdownItem onClick={(e) => filterHandler("Alphabetical (A-Z)")}>Alphabetical (A-Z)</DropdownItem>
                        <DropdownItem onClick={(e) => filterHandler("Alphabetical (Z-A)")}>Alphabetical (Z-A)</DropdownItem>
                        <DropdownItem onClick={(e) => filterHandler("Latest - Earliest Date")}>Latest - Earliest Date</DropdownItem>
                        <DropdownItem onClick={(e) => filterHandler("Earliest - Latest Date")}>Earliest - Latest Date</DropdownItem>
                        <DropdownItem onClick={(e) => filterHandler("Center (A-Z)")}>Center (A-Z)</DropdownItem>
                        <DropdownItem onClick={(e) => filterHandler("Center (Z-A)")}>Center (Z-A)</DropdownItem>
                    </DropdownMenu>
                </Dropdown>
            </div>

            <div >
                {selectedCategory.length > 0 && <h5 className={styles.selectedCategoryHeader}> {selectedCategory} </h5>}

            </div>
            <div style={{ margin: "4rem" }}>
                <div style={{marginBottom: '2rem'}}>
                    {searchKeyword && <span style={{ marginLeft: '1rem', fontSize: '1.75rem', fontStyle: 'italic', fontFamily: 'Times New Roman' }}> Search Results for "{searchKeyword}" </span>}
                    {searchAuthor && <span style={{ marginLeft: '1rem', fontSize: '1.75rem', fontStyle: 'italic', fontFamily: 'Times New Roman' }}> Search Results for "{searchAuthor}" </span>}
                    {searchOrganization && <span style={{ marginLeft: '1rem', fontSize: '1.75rem', fontStyle: 'italic', fontFamily: 'Times New Roman' }}> Search Results for "{searchOrganization}" </span>}
                </div>
                <Table >
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Article Title</th>
                            <th>Author Name</th>
                            <th>Date Published</th>
                            <th>Center</th>
                        </tr>
                    </thead>
                    <tbody>

                        {retrievedArticles.length > 0 &&
                            retrievedArticles.map((article) => {
                                //console.log("test", article);
                                return <TableRow article={article} articleId={articleId++} />
                            })

                        }

                    </tbody>
                </Table>
            </div>



        </div>
    )

}

export default CategoryGroupContainer;