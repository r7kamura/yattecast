FROM ruby:3.4.5

WORKDIR /app

COPY \
  Gemfile \
  Gemfile.lock \
  /app/
RUN bundle config set path '/bundle'
RUN bundle install --jobs=4
