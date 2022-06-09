/*const config = {
    //Config Cosmic
    bucket_name:      "blogbvn-blog",
    bucket_slug:      "blogbvn-blog",
    type_object_name: "Posts",
    page_size:        "&limit=6",
    query_base:       "&query=%7B%22type%22%3A%22posts%22%7D",
    query_trends:     "%7B%22type%22%3A%22posts%22%2C%20%22metadata.category%22%3A%22trends%22%7D",
    read_key:         "&read_key=zWDzAqZUqjPIBB0SkedW72Q5IzFxlEYnNH9o2LpMtWzrgfrQQZ",
    write_key:        "ccIrZuQKTKDg6L5URHulJdcHI70r6cj8oVHAe3sfFyNIvuDh3y",
    url:              "https://api.cosmicjs.com/v2/buckets/blogbvn-blog/objects?pretty=true"
  }*/
  
  const Cosmic = require('cosmicjs')()
  const bucket = Cosmic.bucket({
    slug: 'blogbvn-blog',
    read_key: 'zWDzAqZUqjPIBB0SkedW72Q5IzFxlEYnNH9o2LpMtWzrgfrQQZ'
  })

  export default bucket;
