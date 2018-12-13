require 'faraday'
require 'filesize'

module Jekyll
  module CustomFilters
    def extname(filepath)
      File.extname(filepath)[1..-1]
    end

    def filesize(url, pretty=false)
      res = Faraday.head url
      res.headers['Content-Length']
    end

    def pretty_size(size)
      (Filesize.from('0 KB') + Filesize.from(size+' B')).pretty
    end
  end
end

Liquid::Template.register_filter(Jekyll::CustomFilters)