// "use client"
// import React ,{ useEffect, useState } from 'react'
// const page = () => {
//     const [data, setData] = useState([]);

//     const apiResponse = {
//         "sys": {
//             "type": "Array"
//         },
//         "total": 4,
//         "skip": 0,
//         "limit": 100,
//         "items": [
//             {
//                 "metadata": {
//                     "tags": [],
//                     "concepts": []
//                 },
//                 "sys": {
//                     "space": {
//                         "sys": {
//                             "type": "Link",
//                             "linkType": "Space",
//                             "id": "s010gsnc7awr"
//                         }
//                     },
//                     "id": "4d0YEUpyXiqhs9Jks9G1XZ",
//                     "type": "Entry",
//                     "createdAt": "2025-01-03T18:22:31.834Z",
//                     "updatedAt": "2025-01-03T18:22:31.834Z",
//                     "environment": {
//                         "sys": {
//                             "id": "master",
//                             "type": "Link",
//                             "linkType": "Environment"
//                         }
//                     },
//                     "publishedVersion": 11,
//                     "revision": 1,
//                     "contentType": {
//                         "sys": {
//                             "type": "Link",
//                             "linkType": "ContentType",
//                             "id": "blog"
//                         }
//                     },
//                     "locale": "en-US"
//                 },
//                 "fields": {
//                     "title": "New blog",
//                     "description": "test __description__ *italic*\n\n1. one\n2. two\n3. three \n"
//                 }
//             },
//             {
//                 "metadata": {
//                     "tags": [],
//                     "concepts": []
//                 },
//                 "sys": {
//                     "space": {
//                         "sys": {
//                             "type": "Link",
//                             "linkType": "Space",
//                             "id": "s010gsnc7awr"
//                         }
//                     },
//                     "id": "13ccqbSPtPLCmIb9ljVBhl",
//                     "type": "Entry",
//                     "createdAt": "2025-01-03T15:21:45.485Z",
//                     "updatedAt": "2025-01-03T17:28:31.619Z",
//                     "environment": {
//                         "sys": {
//                             "id": "master",
//                             "type": "Link",
//                             "linkType": "Environment"
//                         }
//                     },
//                     "publishedVersion": 12,
//                     "revision": 8,
//                     "contentType": {
//                         "sys": {
//                             "type": "Link",
//                             "linkType": "ContentType",
//                             "id": "blog"
//                         }
//                     },
//                     "locale": "en-US"
//                 },
//                 "fields": {
//                     "title": "Test titile",
//                     "description": "test description ",
//                     "image": {
//                         "sys": {
//                             "type": "Link",
//                             "linkType": "Asset",
//                             "id": "grDkL5SqN1MKnbaW7cHDG"
//                         }
//                     }
//                 }
//             },
//             {
//                 "metadata": {
//                     "tags": [],
//                     "concepts": []
//                 },
//                 "sys": {
//                     "space": {
//                         "sys": {
//                             "type": "Link",
//                             "linkType": "Space",
//                             "id": "s010gsnc7awr"
//                         }
//                     },
//                     "id": "1EqG102cMonWccadZKCxPw",
//                     "type": "Entry",
//                     "createdAt": "2025-01-03T16:36:49.468Z",
//                     "updatedAt": "2025-01-03T17:28:05.060Z",
//                     "environment": {
//                         "sys": {
//                             "id": "master",
//                             "type": "Link",
//                             "linkType": "Environment"
//                         }
//                     },
//                     "publishedVersion": 9,
//                     "revision": 3,
//                     "contentType": {
//                         "sys": {
//                             "type": "Link",
//                             "linkType": "ContentType",
//                             "id": "blog"
//                         }
//                     },
//                     "locale": "en-US"
//                 },
//                 "fields": {
//                     "title": "This from blog collection title ",
//                     "description": "This from blog description ",
//                     "image": {
//                         "sys": {
//                             "type": "Link",
//                             "linkType": "Asset",
//                             "id": "4r4lisuud88x3fwRJNcRHV"
//                         }
//                     }
//                 }
//             },
//             {
//                 "metadata": {
//                     "tags": [],
//                     "concepts": []
//                 },
//                 "sys": {
//                     "space": {
//                         "sys": {
//                             "type": "Link",
//                             "linkType": "Space",
//                             "id": "s010gsnc7awr"
//                         }
//                     },
//                     "id": "7c8KzxSgPMy1oYD38nvi5z",
//                     "type": "Entry",
//                     "createdAt": "2025-01-01T14:25:15.788Z",
//                     "updatedAt": "2025-01-03T14:07:36.879Z",
//                     "environment": {
//                         "sys": {
//                             "id": "master",
//                             "type": "Link",
//                             "linkType": "Environment"
//                         }
//                     },
//                     "publishedVersion": 2,
//                     "revision": 2,
//                     "contentType": {
//                         "sys": {
//                             "type": "Link",
//                             "linkType": "ContentType",
//                             "id": "componentAuthor"
//                         }
//                     },
//                     "locale": "en-US"
//                 },
//                 "fields": {
//                     "internalName": "Omar Franci",
//                     "name": "Omar Franci",
//                     "avatar": {
//                         "sys": {
//                             "type": "Link",
//                             "linkType": "Asset",
//                             "id": "grDkL5SqN1MKnbaW7cHDG"
//                         }
//                     }
//                 }
//             }
//         ],
//         "includes": {
//             "Asset": [
//                 {
//                     "metadata": {
//                         "tags": [],
//                         "concepts": []
//                     },
//                     "sys": {
//                         "space": {
//                             "sys": {
//                                 "type": "Link",
//                                 "linkType": "Space",
//                                 "id": "s010gsnc7awr"
//                             }
//                         },
//                         "id": "4r4lisuud88x3fwRJNcRHV",
//                         "type": "Asset",
//                         "createdAt": "2025-01-03T16:40:17.951Z",
//                         "updatedAt": "2025-01-03T16:40:17.951Z",
//                         "environment": {
//                             "sys": {
//                                 "id": "master",
//                                 "type": "Link",
//                                 "linkType": "Environment"
//                             }
//                         },
//                         "publishedVersion": 7,
//                         "revision": 1,
//                         "locale": "en-US"
//                     },
//                     "fields": {
//                         "title": "Stack overflow ",
//                         "description": "",
//                         "file": {
//                             "url": "//images.ctfassets.net/s010gsnc7awr/4r4lisuud88x3fwRJNcRHV/86c6020b79cb8c70081a48c2dd776c81/stackoverflow-dev-survey-2024-technology-most-popular-technologies-webframe-social.png",
//                             "details": {
//                                 "size": 478321,
//                                 "image": {
//                                     "width": 2400,
//                                     "height": 3900
//                                 }
//                             },
//                             "fileName": "stackoverflow-dev-survey-2024-technology-most-popular-technologies-webframe-social.png",
//                             "contentType": "image/png"
//                         }
//                     }
//                 },
//                 {
//                     "metadata": {
//                         "tags": [],
//                         "concepts": []
//                     },
//                     "sys": {
//                         "space": {
//                             "sys": {
//                                 "type": "Link",
//                                 "linkType": "Space",
//                                 "id": "s010gsnc7awr"
//                             }
//                         },
//                         "id": "grDkL5SqN1MKnbaW7cHDG",
//                         "type": "Asset",
//                         "createdAt": "2025-01-01T14:25:01.214Z",
//                         "updatedAt": "2025-01-02T03:40:53.369Z",
//                         "environment": {
//                             "sys": {
//                                 "id": "master",
//                                 "type": "Link",
//                                 "linkType": "Environment"
//                             }
//                         },
//                         "publishedVersion": 5,
//                         "revision": 2,
//                         "locale": "en-US"
//                     },
//                     "fields": {
//                         "title": "first Blog",
//                         "description": "first Blog Description",
//                         "file": {
//                             "url": "//images.ctfassets.net/s010gsnc7awr/grDkL5SqN1MKnbaW7cHDG/72b96c6a78cea52fbc34eff9a341c9f8/Omar_Franci.png",
//                             "details": {
//                                 "size": 22005,
//                                 "image": {
//                                     "width": 114,
//                                     "height": 112
//                                 }
//                             },
//                             "fileName": "Omar Franci.png",
//                             "contentType": "image/png"
//                         }
//                     }
//                 }
//             ]
//         }
//     }

//     useEffect(() => {
//         if (apiResponse) {
//             const resolvedData = apiResponse.items.map((item) => {
//                 // Resolve the image from includes
//                 const imageId = item.fields.image?.sys?.id;
//                 const imageAsset = apiResponse.includes.Asset.find(
//                     (asset) => asset.sys.id === imageId
//                 );

//                 return {
//                     ...item.fields,
//                     imageUrl: imageAsset?.fields.file.url
//                         ? `https:${imageAsset.fields.file.url}`
//                         : null,
//                 };
//             });
//             debugger
//             setData(resolvedData);
//         }
//     }, [apiResponse]);
//     return (
//         <div className="contentful-list">
//             {data.map((entry, index) => (
//                 <div key={index} className="contentful-item">
//                     <h3>{entry.title}</h3>
//                     <p>{entry.description}</p>
//                     {entry.imageUrl && (
//                         <img
//                             src={entry.imageUrl}
//                             alt={entry.title}
//                             style={{ width: "200px", height: "auto" }}
//                         />
//                     )}
//                 </div>
//             ))}
//         </div>
//     )
// }

// export default page


// app/content/route.js
import React from 'react';

export default async function Page() {
  const spaceId = 's010gsnc7awr'; // Your space ID
  const accessToken = 'your-access-token'; // Replace with your Contentful access token
  const url = `https://cdn.contentful.com/spaces/${spaceId}/environments/master/entries`;

  try {
    // Fetch data from Contentful API
    const res = await fetch(url, {
      headers: {
        'Authorization': `Bearer ${'sCY0-iR5NfmLmJp_E9UqQ8EahTIeFUL8-8s1TKOXuiE'}`,
      },
    });

    if (!res.ok) {
      throw new Error('Failed to fetch data');
    }

    // Parse the JSON response
    const apiResponse = await res.json();

    // Format the response
    const resolvedData = apiResponse.items.map((item) => {
      // Resolve the image from includes
      const imageId = item.fields.image?.sys?.id;
      const imageAsset = apiResponse.includes.Asset.find(
        (asset) => asset.sys.id === imageId
      );

      return {
        ...item.fields,
        imageUrl: imageAsset?.fields.file.url
          ? `https:${imageAsset.fields.file.url}`
          : null,
      };
    });

    // Return formatted data
    return (
      <div>
        <h1>Contentful Data</h1>
        <pre>{JSON.stringify(resolvedData, null, 2)}</pre>
      </div>
    );
  } catch (error) {
    return (
      <div>
        <h1>Error loading data</h1>
      </div>
    );
  }
}
