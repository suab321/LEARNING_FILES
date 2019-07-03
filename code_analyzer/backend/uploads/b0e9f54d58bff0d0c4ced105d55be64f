#include<ros/ros.h>
#include<std_msgs/String.h>
#include<sstream>

int main(int argv,char **argc){
    ros::init(argv,argc,"talker_node");

    ros::NodeHandle node;

    ros::Publisher pub;
    pub=node.advertise<std_msgs::String>("chatter",1000);

    ros::Rate loop_rate(0.5);

    int count=0;

    while(ros::ok()){
        std_msgs::String msg;
        std::stringstream ss;
        ss << "Hello world" <<count;
        msg.data=ss.str();

        ROS_INFO("Talker I published %s\n",msg.data.c_str());
        pub.publish(msg);

        ros::spin();
        loop_rate.sleep();
        count++;
    }
}