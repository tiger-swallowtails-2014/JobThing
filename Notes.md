# Demonstration

1.  I love the super minimalist design
2.  I don't love the jQuery soup....

## In Person Review

The main take away is that the rails app is nicely done for the fact that you
have a lot of complexity.  The main issue I see here is that your JavaScript's
design is really complex.  The strangeness in
`app/controllers/users_controller.rb` is a smell that something isn't right.

It turns out that the JavaScript design that necessitates dozens of hidden
buttons is driving your application to be over-complex.   You need to take
advantage of a better JavaScript abstraction layer.  Your app would be lovely
as a series of 5-6 widgets that allow a Job to move through phases.  Try to
remove the hidden button hack as well as move to a cleaner JS implementation.
