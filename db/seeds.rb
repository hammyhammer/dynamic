# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

squat = Movement.create! name: "Squat", type: "Legs", difficultly: "Beginner", image: "https://gympion.com/wp-content/uploads/man-performing-Air-Squat-at-gym.jpg" 
pushup = Movement.create! name: "Pushup", type: "Horizontal Push", difficultly: "Beginner", image: "https://images.pexels.com/photos/4162487/pexels-photo-4162487.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
pullup = Movement.create! name: "Pullup", type: "Vertical Pull", difficultly: "Beginner", image: "https://projectcalisthenics.com/wp-content/uploads/2021/01/gordon-cowie-kVX6MBa2uNk-unsplash-1233x1536.jpg"
forward_lunge = Movement.create! name: "Forward Lunge", type: "Legs", difficultly: "Beginner", image:
db_shoulder_press = Movement.create! name: "Dumbbell Shoulder Press", type: "Vertical Push", difficultly: "Beginner", image:
hpu = Movement.create! name: "Horizontal Pullup", type: "Horizontal Pull", difficultly: "Beginner", image:
power_stepup = Movement.create! name: "Power Stepup", type: "Leg", difficultly: "Beginner", image:
lat_pulldown = Movement.create! name: "Lat Pulldown", type: "Vertical Pull", difficultly: "Beginner", image:
bench_dips = Movement.create! name: "Bench Dips", type: "Vertical Push", difficultly: "Beginner", image:


