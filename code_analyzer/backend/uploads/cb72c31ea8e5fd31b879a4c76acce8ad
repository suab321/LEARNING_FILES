#include<ros/ros.h>
#include<std_msgs/String.h>


void chatterbox(const std_msgs::String::ConstPtr& msg){
    ROS_INFO("I heard from talker [%s]\n",msg->data.c_str());
}

int main(int argv,char **argc){
    ros::init(argv,argc,"listener_node");

    ros::NodeHandle node;

    ros::Subscriber sub=node.subscribe("chatter",1000,chatterbox);

    ros::spin();

    return 0;
}
