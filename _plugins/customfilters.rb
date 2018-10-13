require 'faraday'

module Jekyll
  module CustomFilters
    def extname(filepath)
      File.extname(filepath)[1..-1]
    end

    def filesize(url)
      res = Faraday.head url
      res.headers['Content-Length']
    end
  end
end

Liquid::Template.register_filter(Jekyll::CustomFilters)