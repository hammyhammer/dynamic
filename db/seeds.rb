# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

Movement.destroy_all

squat = Movement.create! name: "Squat", category: "Legs", difficultly: "Beginner", description: "Place your feet shoulder width apart. Sink your hips until you break parallel or go below the knees. Keep your Chest up.", image: "https://gympion.com/wp-content/uploads/man-performing-Air-Squat-at-gym.jpg" 
pushup = Movement.create! name: "Pushup", category: "Horizontal Push", difficultly: "Beginner", description: "Place your hands below your shoulders. Lower yourself until you are close to the ground. Fully extend at the top.", image: "https://images.pexels.com/photos/4162487/pexels-photo-4162487.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
pullup = Movement.create! name: "Pullup", category: "Vertical Pull", difficultly: "Beginner", description: "Place your hands slightly wider than shoulder width apart. Pull yourself until your chest is at the bar. Control your descent back down.", image: "https://projectcalisthenics.com/wp-content/uploads/2021/01/gordon-cowie-kVX6MBa2uNk-unsplash-1233x1536.jpg"
forward_lunge = Movement.create! name: "Forward Lunge", category: "Legs", difficultly: "Beginner", description: "Keep your chest up. Take a big step forward, and sink your hips. Push off your forward foot to remain to the starting position.", image: "https://experiencelife.lifetime.life/wp-content/uploads/2021/03/The_Lunge.jpg"
db_shoulder_press = Movement.create! name: "Dumbbell Shoulder Press", category: "Vertical Push", difficultly: "Beginner", description: "Place your feet about shoulder width about. Have your hands at shoulder level. Control the descent of the weight.", image: "https://cdn.mos.cms.futurecdn.net/LsqTqWvgpqXaCtdJoryCWn.jpg"
hpu = Movement.create! name: "Horizontal Pullup", category: "Horizontal Pull", difficultly: "Beginner", description: "The lower the bar is placed, the more difficult the movement. Place your hands slightly more than shoulder width about on the bar. Pull your chest to the bar.", image: "https://whitecoattrainer.com/wp-content/uploads/2019/03/2e021-benefits-of-inverted-row.jpgbenefits-of-inverted-row.jpg"
stepup = Movement.create! name: "Stepup", category: "Leg", difficultly: "Beginner", description: "Set up the platform or box at about knee height. Step on the box and fully extend at the hip. Step back down to complete the repetition.", image: "https://marvel-b1-cdn.bc0a.com/f00000000229348/www.silversneakers.com/wp-content/uploads/2019/09/SSBlog_4StepUpVariations.jpg"
lat_pulldown = Movement.create! name: "Lat Pulldown", category: "Vertical Pull", difficultly: "Beginner", description: "Adjust the knee anchor to a comfortable and secure position. Have your hands about shoulder width about. Bring the bar to your chest and fully extend at the top.", image: "https://garagegympro.com/wp-content/uploads/2021/08/exercise.jpg"
bench_dips = Movement.create! name: "Bench Dips", category: "Vertical Push", difficultly: "Beginner", description: "Place your hands shoulder width about on the bench. Lower your body until your elbows are at 90 degrees. Fully extend to return to the starting position.", image: "https://www.rebootwithjoe.com/wp-content/uploads/2015/10/Fitness-Hacks.jpg"

puts "#{Movement.count} movements were created"

