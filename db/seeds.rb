# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

Movement.destroy_all

squat = Movement.create! name: "Squat", category: "Legs", difficultly: "Beginner", image: "https://gympion.com/wp-content/uploads/man-performing-Air-Squat-at-gym.jpg" 
pushup = Movement.create! name: "Pushup", category: "Horizontal Push", difficultly: "Beginner", image: "https://images.pexels.com/photos/4162487/pexels-photo-4162487.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
pullup = Movement.create! name: "Pullup", category: "Vertical Pull", difficultly: "Beginner", image: "https://projectcalisthenics.com/wp-content/uploads/2021/01/gordon-cowie-kVX6MBa2uNk-unsplash-1233x1536.jpg"
forward_lunge = Movement.create! name: "Forward Lunge", category: "Legs", difficultly: "Beginner", image: "https://experiencelife.lifetime.life/wp-content/uploads/2021/03/The_Lunge.jpg"
db_shoulder_press = Movement.create! name: "Dumbbell Shoulder Press", category: "Vertical Push", difficultly: "Beginner", image: "https://cdn.mos.cms.futurecdn.net/LsqTqWvgpqXaCtdJoryCWn.jpg"
hpu = Movement.create! name: "Horizontal Pullup", category: "Horizontal Pull", difficultly: "Beginner", image: "https://whitecoattrainer.com/wp-content/uploads/2019/03/2e021-benefits-of-inverted-row.jpgbenefits-of-inverted-row.jpg"
stepup = Movement.create! name: "Stepup", category: "Leg", difficultly: "Beginner", image: "https://marvel-b1-cdn.bc0a.com/f00000000229348/www.silversneakers.com/wp-content/uploads/2019/09/SSBlog_4StepUpVariations.jpg"
lat_pulldown = Movement.create! name: "Lat Pulldown", category: "Vertical Pull", difficultly: "Beginner", image: "https://garagegympro.com/wp-content/uploads/2021/08/exercise.jpg"
bench_dips = Movement.create! name: "Bench Dips", category: "Vertical Push", difficultly: "Beginner", image: "https://www.rebootwithjoe.com/wp-content/uploads/2015/10/Fitness-Hacks.jpg"

puts "#{Movement.count} movements were created"

